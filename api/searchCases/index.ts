import * as express from 'express'
import * as striptags from 'striptags'
import {getConfigValue} from '../configuration'
import {
  SERVICES_CCD_COMPONENT_API_PATH,
} from '../configuration/references'
import { http } from '../lib/http'
import { setHeaders } from '../lib/proxy'

/**
 * Manually creating Elastic search query
 */
export async function getCases(req: express.Request, res: express.Response, next: express.NextFunction) {
    let url = striptags(req.url)
    url = req.baseUrl  + url
    const headers: any = setHeaders(req)

    try {
        const body = prepareElasticQuery(req.query, req.body)
        console.log(JSON.stringify(body))

        const response = await http.post(`${getConfigValue(SERVICES_CCD_COMPONENT_API_PATH)}${url}`, body, { headers })

        res.status(response.status)

        res.send(handleElasticSearchResponse(response.data))
    } catch (e) {
        next(e)
    }
}

function prepareElasticQuery(queryParams: object, body: {size?}): object {
    const metaCriteria = queryParams
    let caseCriteria = {}

    Object.keys(metaCriteria).map(key => {
        if (key === 'ctid' || key === 'usecase' || key === 'view' || key === 'page') {
            delete metaCriteria[key]
        }

        if (key.indexOf('case.') > -1) {
            const newKey = key.replace('case.', '')
            caseCriteria = {
                ...caseCriteria,
                [newKey]: metaCriteria[key],
            }
            delete metaCriteria[key]
        }
    })
    let query: {} = {}
    const matchList: object[] = []

    if (metaCriteria) {
        for (const criterion of Object.keys(metaCriteria)) {

            if (metaCriteria[criterion]) {
                const match = {
                    match: {
                        [criterion]: {
                            operator: 'and',
                            query: metaCriteria[criterion],
                        },
                    },
                }
                matchList.push(match)
            }
        }

    }

    if (caseCriteria) {
        for (const criterion of Object.keys(caseCriteria)) {

            if (caseCriteria[criterion]) {
                const match = {
                    match: {
                        ['data.' + criterion]: {
                            operator: 'and',
                            query: caseCriteria[criterion],
                        },
                    },
                }
                matchList.push(match)
            }
        }
    }

    query = {
        bool: {
            must: matchList,
        },
    }

    // query = {
    //   match_all: {}
    // };

    return {
        query,
        size: body.size,
    }
}

function handleElasticSearchResponse(json): {} {

    const results = json.cases.map(caseObj => {
      caseObj.case_fields = caseObj.fields
      caseObj.case_fields_formatted = caseObj.fields_formatted
      delete caseObj.fields
      delete caseObj.fields_formatted
      return caseObj
    })

    const handledResponse = {
        'columns': json.headers[0].fields,
        'results': results,
        'total': json.total,
    }

    return handledResponse
}
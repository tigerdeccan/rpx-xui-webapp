import * as express from 'express'
import {getConfigValue} from '../configuration'
import {
  SERVICES_CCD_COMPONENT_API_PATH,
} from '../configuration/references'
import { http } from '../lib/http'

export async function doLookup(req: express.Request, res: express.Response) {

    try {
        const postcode = req.query.postcode

        const url = `${getConfigValue(SERVICES_CCD_COMPONENT_API_PATH)}/addresses?postcode=${postcode}`

        const response = await http.get(url)

        res.send(response.data)
    } catch (error) {

        const errReport = {
            apiError: error.message,
            apiErrorDescription: error.data.errorDescription,
            statusCode: error.status,
        }
        res.status(errReport.statusCode)
        res.send(errReport)
    }
}

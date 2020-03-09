import * as express from 'express'
import {getConfigValue} from '../configuration'
import {
  SERVICES_EM_ANNO_API_URL,
} from '../configuration/references'
import {EnhancedRequest} from '../lib/models'
import {handleDelete, handleGet, handlePost, handlePut} from './emAnnoService'
import { Annotation, Annotations } from './models'

const url: string = getConfigValue(SERVICES_EM_ANNO_API_URL)

/**
 * getAnnotations
 */
export async function getAnnotations(req: EnhancedRequest, res: express.Response) {

  const annotationsPath: string = url + req.originalUrl.replace('/em-anno/', '/api/')

  try {
    const jsonResponse: Annotations = await handleGet(annotationsPath)
    res.status(200).send(jsonResponse)
  } catch (error) {
    res.status(error.status).send({
      errorMessage: error.data,
      errorStatusText: error.statusText,
    })
  }
}

/**
 * postAnnotations
 */
export async function postAnnotations(req: EnhancedRequest, res: express.Response) {

  const annotationsPath: string = url + req.originalUrl.replace('/em-anno/', '/api/')
  const body: Annotation = req.body

  try {
    const jsonResponse: Annotation = await handlePost(annotationsPath, body)
    res.status(200).send(jsonResponse)
  } catch (error) {
    res.status(error.status).send({
      errorMessage: error.data,
      errorStatusText: error.statusText,
    })
  }
}

/**
 * putAnnotations
 */
export async function putAnnotations(req: EnhancedRequest, res: express.Response) {

  const annotationsPath: string = url + req.originalUrl.replace('/em-anno/', '/api/')
  const body: Annotation = req.body

  try {
    const jsonResponse: Annotation = await handlePut(annotationsPath, body)
    res.status(200).send(jsonResponse)
  } catch (error) {
    res.status(error.status).send({
      errorMessage: error.data,
      errorStatusText: error.statusText,
    })
  }
}

/**
 * deleteAnnotations
 */
export async function deleteAnnotations(req: EnhancedRequest, res: express.Response) {

  const annotationsPath: string = url + req.originalUrl.replace('/em-anno/', '/api/')

  try {
    const jsonResponse: Annotation = await handleDelete(annotationsPath)
    res.status(200).send(jsonResponse)
  } catch (error) {
    res.status(error.status).send({
      errorMessage: error.data,
      errorStatusText: error.statusText,
    })
  }
}

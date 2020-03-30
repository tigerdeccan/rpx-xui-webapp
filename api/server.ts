import { app } from './application'

import * as ejs from 'ejs'
import * as express from 'express'
import * as path from 'path'
import {getConfigValue, showFeature} from './configuration'
import {
  COOKIES_SESSION_ID,
  COOKIES_TOKEN,
  FEATURE_APP_INSIGHTS_ENABLED,
  FEATURE_HELMET_ENABLED,
  FEATURE_PROXY_ENABLED,
  FEATURE_REDIS_ENABLED,
  FEATURE_SECURE_COOKIE_ENABLED,
  FEATURE_TERMS_AND_CONDITIONS_ENABLED,
  HEALTH,
  LOGGING,
  MAX_LOG_LINE,
  PROTOCOL,
  SERVICE_S2S_PATH,
  SERVICES_CCD_COMPONENT_API_PATH,
  SERVICES_CCD_DATA_STORE_API_PATH,
  SERVICES_DOCUMENTS_API_PATH,
  SERVICES_IDAM_API_URL,
  SERVICES_IDAM_CLIENT_ID,
  SERVICES_IDAM_INDEX_URL,
  SERVICES_IDAM_LOGIN_URL,
  SERVICES_IDAM_OAUTH_CALLBACK_URL,
  SERVICES_TERMS_AND_CONDITIONS_URL,
} from './configuration/references'
import { appInsights } from './lib/appInsights'
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')
app.set('views', __dirname)

app.set('view engine', 'html')
app.set('views', __dirname)

app.use(express.static(path.join(__dirname, '..', 'assets'), { index: false }))
app.use(express.static(path.join(__dirname, '..'), { index: false }))

app.use('/*', (req, res) => {
    res.render('../index', {
        providers: [
            { provide: 'REQUEST', useValue: req },
            { provide: 'RESPONSE', useValue: res },
        ],
        req,
        res,
    })
})

console.log('CHECK ENVIRONMENT VARIABLES:')
console.log(getConfigValue(SERVICES_CCD_COMPONENT_API_PATH))
console.log(getConfigValue(SERVICES_CCD_DATA_STORE_API_PATH))
console.log(getConfigValue(SERVICES_DOCUMENTS_API_PATH))
console.log(getConfigValue(COOKIES_TOKEN))
console.log(getConfigValue(COOKIES_SESSION_ID))
console.log(getConfigValue(SERVICES_IDAM_API_URL))
console.log(getConfigValue(SERVICES_IDAM_CLIENT_ID))
console.log(getConfigValue(SERVICES_IDAM_LOGIN_URL))
console.log(getConfigValue(SERVICES_IDAM_INDEX_URL))
console.log(getConfigValue(SERVICES_IDAM_OAUTH_CALLBACK_URL))
console.log(getConfigValue(PROTOCOL))
console.log(getConfigValue(MAX_LOG_LINE))
console.log(getConfigValue(LOGGING))
console.log(getConfigValue(SERVICES_TERMS_AND_CONDITIONS_URL))
console.log(getConfigValue(HEALTH))
console.log(getConfigValue(SERVICE_S2S_PATH))
console.log(showFeature(FEATURE_SECURE_COOKIE_ENABLED))
console.log(showFeature(FEATURE_APP_INSIGHTS_ENABLED))
console.log(showFeature(FEATURE_PROXY_ENABLED))
console.log(showFeature(FEATURE_TERMS_AND_CONDITIONS_ENABLED))
console.log(showFeature(FEATURE_HELMET_ENABLED))
console.log(showFeature(FEATURE_REDIS_ENABLED))
console.log('END CHECK OF ENVIRONMENTAL VARIABLES')

app.use(appInsights)
app.listen(process.env.PORT || 3000, () => {
    console.log('Server listening on port 3000!')
})

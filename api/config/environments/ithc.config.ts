export default {
    health: {
        ccdComponentApi: 'https://gateway.ithc.platform.hmcts.net/health',
        ccdDataApi: 'https://ccd-data-store-api-ithc.service.core-compute-ithc.internal/health',
        documentsApi: 'https://dm-store-ithc.service.core-compute-ithc.internal/health',
    },
    logging: 'debug',
    secureCookie: false,
    services: {
        ccd: {
            componentApi: 'https://gateway.ithc.platform.hmcts.net',
            dataApi: 'https://ccd-data-store-api-ithc.service.core-compute-ithc.internal',
        },
        documents: {
            api: 'https://dm-store-ithc.service.core-compute-ithc.internal',
        },
        idam: {
            idamApiUrl: 'https://idam-api.ithc.platform.hmcts.net',
            idamClientID: 'xuiwebapp',
            idamLoginUrl: 'https://idam-web-public.ithc.platform.hmcts.net',
            indexUrl: '/',
            oauthCallbackUrl: 'oauth2/callback',
        },
        s2s: 'http://rpe-service-auth-provider-ithc.service.core-compute-ithc.internal',
    },
    sessionSecret: 'secretSauce',
    useProxy: false,
}

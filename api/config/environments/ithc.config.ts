export default {
    health: {
        ccdComponentApi: 'https://gateway-ccd.ithc.platform.hmcts.net/health',
        ccdDataApi: 'http://ccd-data-store-api-ithc.service.core-compute-ithc.internal/health',
        documentsApi: 'http://dm-store-ithc.service.core-compute-ithc.internal/health',
        em_anno_api: 'http://em-anno-ithc.service.core-compute-ithc.internal/health',
    },
    logging: 'debug',
    loginRoleMatcher: 'caseworker',
    secureCookie: true,
    services: {
        ccd: {
            componentApi: 'https://gateway-ccd.ithc.platform.hmcts.net',
            dataApi: 'http://ccd-data-store-api-ithc.service.core-compute-ithc.internal',
        },
        documents: {
            api: 'http://dm-store-ithc.service.core-compute-ithc.internal',
        },
        em_anno_api: 'http://em-anno-ithc.service.core-compute-ithc.internal',
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

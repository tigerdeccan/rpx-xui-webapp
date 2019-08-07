import { app } from './application'

import * as http from 'http'
import * as https from 'https'

import * as ejs from 'ejs'
import * as express from 'express'
import * as path from 'path'

//process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

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
const httpsPort = process.env.PORT + 1 || 3001;
const httpPort = process.env.PORT || 3000;
const fs = require('fs');

const privateKey  = fs.readFileSync('/Users/admin/Documents/HMCTS/rpx-xui-webapp/api/sslcert/server.key', 'utf8');
const certificate = fs.readFileSync('/Users/admin/Documents/HMCTS/rpx-xui-webapp/api/sslcert/server.crt', 'utf8');

const credentials = {key: privateKey, cert: certificate};

https.createServer(credentials, app).listen(httpsPort, () => {
  console.log('Server listening on port ${httpsPort}!')
})

http.createServer(app).listen(httpPort, () => {
  console.log('Server listening on port ${httpPort}!')
})

/*
app.listen(process.env.PORT || 3000, () => {
    console.log('Server listening on port 3000!')
})
*/

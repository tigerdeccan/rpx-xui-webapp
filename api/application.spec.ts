import * as chai from 'chai'
import {expect} from 'chai'
import 'chai-http'
import 'mocha'
import * as sinon from 'sinon'
import * as sinonChai from 'sinon-chai'
import {mockReq, mockRes} from 'sinon-express-mock'

chai.use(sinonChai)
chai.use(require('chai-http'))

import * as application from './application'
import * as process from "process";

describe('application', () => {

  describe('Oauth2 route', () => {

    /**
     * We're only testing the call to auth.authenticateUser not the logic within it, which is currently
     * tested within a different file.
     */
    it('Should return a 200 success when /oauth2/callback route is called, so that we can authenticate the user.', () => {
      const app = application.getExpressApp()
      chai.request(app)
        .get('/oauth2/callback')
        .end((error, response) => {
          expect(response).to.have.status(200)
        })
    })
  })

  describe('api route', () => {

    /**
     * TODO: This interfers with other tests as we instruct the application to logout.
     * Therefore we should stub it out.
     */
    // it('Should return a 200 success when /api/logout route is called, so that we can logout the user.', () => {
    //   const app = application.getExpressApp()
    //   chai.request(app)
    //     .get('/api/logout')
    //     .end((error, response) => {
    //       expect(response).to.have.status(200)
    //     })
    // })

    // TODO: Should use a stub
    it('Should return a 200 success when /api/addresses route is called, so that we can do a postcode lookup.', () => {
      const app = application.getExpressApp()
      chai.request(app)
        .get('/api/addresses')
        .end((error, response) => {
          expect(response).to.have.status(200)
        })
    })

    it('Should return the App Insights instrumentation key when /api/monitoring-tools route is called,' +
      'so that we can hook into the monitoring tools.', () => {
      const app = application.getExpressApp()
      chai.request(app)
        .get('/api/monitoring-tools')
        .end((error, response) => {
          expect(response).to.have.status(200)
          expect(response.body.key).to.be.an('string')
        })
    })
  })
})

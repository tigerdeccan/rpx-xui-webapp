import * as chai from 'chai'
import {expect} from 'chai'
import 'chai-http'
import 'mocha'
import * as sinon from 'sinon'
import * as sinonChai from 'sinon-chai'
import {mockReq, mockRes} from 'sinon-express-mock'

chai.use(sinonChai)
chai.use(require('chai-http'))

import * as healthCheck from './index'

describe('health check', () => {

  describe('test', () => {

    it('Should return a 200 success when /api/addresses route is called, so that we can do a postcode lookup.', () => {
      expect(healthCheck.testEndpoint()).to.equal(true)
    })
  })
})

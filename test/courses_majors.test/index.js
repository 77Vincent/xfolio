const assert = require('assert')

const data = require('./data')
const { login, request, url } = require('../service')
const config = require('../../config')

describe('Course_Major', () => {
  it('Create by visitor should return 401', async () => {
    try {
      await request({
        method: 'PUT',
        url: `${url}/courses_majors`,
        body: data[0]
      })
    } catch (err) {
      assert.equal(err.statusCode, 401)
    }
  })

  it('Create should return 200', async () => {
    for (let i = 0; i < data.length; i++) {
      const session = await login(config.adminID, config.adminPassword)
      await request({
        method: 'PUT',
        url: `${url}/courses_majors`,
        auth: { bearer: session.token },
        body: data[i]
      })
    }
    assert.ok(true)
  })

  it('Delete should return 200', async () => {
    try {
      const session = await login(config.adminID, config.adminPassword)
      await request({
        method: 'DELETE',
        url: `${url}/courses_majors`,
        auth: { bearer: session.token },
        body: { course_id: 2, major_id: 3 }
      })
    } catch (err) {
      assert.equal(err.statusCode, 200)
    }
  })
})
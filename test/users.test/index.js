var assert = require('assert')

const data = require('./data')
const config = require('../../config')
const { login, request, modified, url } = require('../service')

describe('User', () => {
  it('Create users should return 200', async () => {
    for (let i = 0; i < data.length; i++) {
      await request({ method: 'PUT', url: `${url}/users`, body: data[i] })
    }
    const users = await request({ method: 'GET', url: `${url}/users`})
    // Admin user is always created
    assert.equal(users.body.length - 1, data.length)
  })

  it('Update a user by visitor should return 401', async () => {
    try {
      await request({
        url: `${url}/users/18811111111`,
        body: { school: modified, cost: 9999, gender: true, name: modified , bio: modified },
      })
    } catch (err) {
      assert.equal(err.statusCode, 401)
    }
  })

  it('Update a user by other user should return 403', async () => {
    const session = await login('18811111111', '000000')
    try {
      await request({
        url: `${url}/users/18822222222`,
        auth: { bearer: session.token },
        body: { school: modified, cost: 9999, gender: true, name: modified , bio: modified },
      })
    } catch (err) {
      assert.equal(err.statusCode, 403)
    }
  })

  it('Update with not satisfiable input should return 416', async () => {
    const session = await login('18811111111', '000000')
    try {
      await request({
        url: `${url}/users/18811111111`,
        auth: { bearer: session.token },
        body: { cost: 99999 },
      })
    } catch (err) {
      assert.equal(err.statusCode, 416)
    }
  })

  it('Update a user by admin should return 200', async () => {
    const session = await login(config.adminID, config.adminPassword)
    const response = await request({
      url: `${url}/users/18811111111`,
      auth: { bearer: session.token },
      body: { school: modified, cost: 9999, gender: true, name: modified , bio: modified },
    })
    assert.equal(response.statusCode, 200)
  })

  it('Update a user by its owner should return 200', async () => {
    const session = await login('18811111111', '000000')
    const response = await request({
      url: `${url}/users/18811111111`,
      auth: { bearer: session.token },
      body: { school: modified, cost: 9999, gender: true, name: modified , bio: modified },
    })
    assert.equal(response.statusCode, 200)
  })

  it('Delete a user by visitor should rturn 401', async () => {
    try {
      await request({
        method: 'DELETE',
        url: `${url}/users/18811111111`,
      })
    } catch (err) {
      assert.equal(err.statusCode, 401)
    }
  })

  it('Delete a user by other user should rturn 403', async () => {
    const session = await login('18822222222', '000000')
    try {
      await request({
        method: 'DELETE',
        auth: { bearer: session.token },
        url: `${url}/users/18811111111`,
      })
    } catch (err) {
      assert.equal(err.statusCode, 403)
    }
  })

  it('Delete a user by owner should rturn 200', async () => {
    const session = await login('18811111111', '000000')
    const response = await request({
      method: 'DELETE',
      auth: { bearer: session.token },
      url: `${url}/users/18811111111`,
    })
    assert.equal(response.statusCode, 200)
  })
})
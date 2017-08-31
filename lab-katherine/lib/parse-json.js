'use strict'

const debug = require('debug')('http:parse-json')

module.exports = function(req) {
  return new Promise((resolve, reject) => {
    if(req.method === 'POST' || req.method === 'PUT') {
      debug('#parse-json POST || PUT')
      let body = ''

      req.on('data', buff => body += buff.toString())
      req.on('end', () => {
        try {
          debug('#parse-json am i doing this')
          req.body = JSON.parse(body)
          return resolve(req)
        } catch(e) {
          console.error(e)
          return reject(e)
        }
      })

      req.on('error', err => {
        console.error(err)
        return reject(err)
      })
      //return
      //changed to explicit returns
    }
    debug('parse-json GET || DELETE')
    resolve(req)
    //will return undefined implicitly
  })
}

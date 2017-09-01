'use strict'

const debug = require('debug')('http:storage')

const storage = module.exports = {}
const memory = {}

storage.create = function(schema, item) {
  debug('#create')
  // debugger
  //in terminal c (to continue) load up all the things and should be able to post new record
  //n is continue to next line //s is where we can step into execution of function
  //watch(expr) needs to be set before I can get into repl watch('schema')
  //repl will allow me to search for things
  if(!schema) return Promise.reject(new Error('cannot create; schema required'))
  if(!item) return Promise.reject(new Error('cannot create; item required'))
  if(!memory[schema]) memory[schema] = {}

  memory[schema][item._id] = item
  return Promise.resolve(item)
}

storage.fetchOne = function(schema, itemId) {

  return new Promise((resolve, reject) => {
    if(!schema) return reject(new Error('cannot get item; schema required'))
    if(!itemId) return reject(new Error('cannon get item; itemId required'))
    if(!memory[schema]) return reject(new Error('cannot get item; schema does not exist'))
    if(!memory[schema][itemId]) return reject(new Error('cannot get item; item does not exist'))

    return resolve(memory[schema][itemId])
  })
}

storage.fetchAll = function() {

}

storage.update = function(schema, item) {
  debug('#update')
  return new Promise((resolve, reject) => {
    if(!schema) return reject(new Error('cannot update item; schema required'))
    if(!item) return reject(new Error('cannot update item, updated item required'))
    //checkthat the item has a name and description
    //only pass name and desc
    if(!memory[schema]) memory[schema] = {}
    //we can leave this more generic and move it out to the route where we will try to find the object if it exists, and if it doesn't create a new one
    // memory[schema][item._id].name = item.name
    // memory[schema][item._id].desc = item.desc
    return resolve(item)
  })
}

storage.delete = function() {

}

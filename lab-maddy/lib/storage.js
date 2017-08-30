'use strict';

const debug = require('debug')('http:storage');
const storage = module.exports = {};

const memory = {};


storage.create = function(schema, item) { //dont use toy here...we will define a s....when i hand you an item tell me what schema i'm using...kid model or family model...
  debug('#create');//#...??
  if(!schema) return Promise.reject(new Error('cannot create schema required'));
  if(!memory[schema]) memory[schema];//if there IS a schema create an empty object at that key
  if(!item) return Promise.reject(new Error('cannot create, item required'));

  memory[schema][item._id] = item;//got to memory object and at that id (aka the key). set that as the key and assign the value(aka item)11:53
  return Promise.resolve(item);
};

storage.fetchOne = function(schema, itemId){
  if(!schema) return Promise.reject(new Error('cannot get item; schema required'));
  if(!itemId) return Promise.reject(new Error('cannot get item; itemId required'));
  if(!memory[schema]) return Promise.reject(new Error('cannot get item; schema does not exist'));
  if(!memory[schema][itemId]) return Promise.reject(new Error('cannot get item; item does not exist'));

  return Promise.resolve(memory[schema][itemId]);//"item at schema at item id"
};

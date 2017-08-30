'use strict';

const debug = require('debug')('http:model-toy');
const uuid = require('uuid/v4');

//object toy constructor
module.exports = function(name, desc){
  debug(`mode-toy: ${name} created`);
  this.name = name;
  this.desc = desc;
  this._id = uuid();
};

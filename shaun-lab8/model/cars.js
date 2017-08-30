'use strict';

const debug = require('debug')('http:model-cars');
const uuid = require('uuid/v4');

module.exports = function(name, desc, year) {
  debug(`model-cars: ${name} created`);
  this.brand = name;
  this.model = desc;
  this.year = year;
  this._id = uuid();
};

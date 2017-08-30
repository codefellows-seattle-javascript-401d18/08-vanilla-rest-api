'use strict';

const debug = require('debug')('http:model-cars');
const uuid = require('uuid/v4');

module.exports = function(make, model, year) {
  debug(`model-cars: ${make} created`);
  this.brand = make;
  this.model = model;
  this.year = year;
  this._id = uuid();
};

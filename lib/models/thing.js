'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var ThingSchema = new Schema({
  addTime: String,
  name: String,
  val: String
});


mongoose.model('Thing', ThingSchema);

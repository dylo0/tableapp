'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var ThingSchema = new Schema({
  addTime: String,
  sentiment: String
});


mongoose.model('Thing', ThingSchema);

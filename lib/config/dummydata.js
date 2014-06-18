'use strict';

var mongoose = require('mongoose'),
  Thing = mongoose.model('Thing');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Thing.find({}).remove(function() {
  Thing.create({
      addTime: '2014-06-18T09:04:44.670Z',
      name: 'item 1',
      val: 'value 1'
      },
      {
      addTime: '2014-06-18T09:04:44.670Z',
      name: 'item 2',
      val: 'value 2'
      },
      {
      addTime: '2014-06-18T09:04:44.670Z',
      name: 'item 3',
      val: 'value 3'
      }, function() {
      console.log('finished populating things');
    }
  );
});


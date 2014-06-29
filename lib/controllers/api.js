'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing');

module.exports = {
  getItems:  function(req, res) {
    return Thing.find(function (err, things) {
      if (!err) {
        return res.json(things);
      } else {
        return res.send(err);
      }
    });
  },

  addItem: function(req, res) {
    var item = new Thing({
      name: req.body.name,
      val: req.body.val,
      addTime: req.body.addTime
    });

    item.save(function (err) {
      if (err) {
        res.send(500, "There was a problem adding the information to the database.")
      } else {
        res.send(item);
      }
    });
  },

  removeItem: function (req, res) {
    var item = {_id: req.body._id}
    Thing.remove(item , function (err) {
      if (err) {
        res.send(500, "Cannot remove item:" + err);
      } else {
        res.send(200, item);
      }
    });
  }
}
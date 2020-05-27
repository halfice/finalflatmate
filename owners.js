// routes/api/books.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

var Owners = express.Router();

// @route GET api/books/test
// @description tests books route
// @access Public
Owners.get('/', (req, res) => res.send('book route testing!'));



// @route GET api/books
// @description Get all books
// @access Public

// @route GET api/books/:id
// @description Get single book by id
// @access Public
Owners.get('/:id', (req, res) => {

 
  const db = require("./db");
  const dbName = "flatmate";
  const collectionName = "users";
  db.initialize(dbName, collectionName, function (dbCollection) { // successCallback
    var itemId = req.body.email;
    
  //  console.log("this is item-"+itemId);
 // dbCollection.findOne({ 'email': itemId }, (error, result) => {
    dbCollection.findOne({ 'email': 'axix.szabist@gmail.com' }, (error, result) => {
      if (error) throw error;
      // return item
     // console.log(result);
     // console.log(error);
      res.json(result);
    });
  }, function (err) { // failureCallback
    throw (err);
  });




});

Owners.post('/register', (req, res) => {
  console.log("inside");
  const db = require("./db");
  const dbName = "flatmate";
  const collectionName = "owners";
  db.initialize(dbName, collectionName, function (dbCollection) { // successCallback
    
    dbCollection.insert({

      'LoginUserID': req.body.LoginUserID,
      'location': req.body.location,
      'typeofAccomodation': req.body.typeofAccomodation,
      'propertyAddress': req.body.propertyAddress,
      'totalbed': req.body.totalbed,
      'totalbathrooms': req.body.totalbathrooms,
      'parking': req.body.parking,
      'internet': req.body.internet,
      'roomename': req.body.roomename,
      'roomtype': req.body.roomtype,
      'roomfuninishing': req.body.roomfuninishing,
      'bathroom': req.body.bathroom,
      'bedsize': req.body.bedsize,
      'roomfeatures': req.body.roomfeatures,
      'rent': req.body.rent,
      'bonds': req.body.bonds,
      'bills': req.body.bills,
      'picstring':req.body.picstring,
      'itemid': req.body.itemid
      
      }, (error, result) => {
      var _userId = result["ops"][0]["_id"];
      if (error) throw error;
      // return item
      res.json(_userId);
    });
  }, function (err) { // failureCallback
    throw (err);
  });


});

// @route GET api/books
// @description add/save book
// @access Public


// @route GET api/books/:id
// @description Update book
// @access Public
Owners.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
Owners.delete('/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a book' }));
});

module.exports = Owners;
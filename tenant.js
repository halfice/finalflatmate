// routes/api/books.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

var Tenant = express.Router();

// @route GET api/books/test
// @description tests books route
// @access Public
Tenant.get('/', (req, res) => res.send('book route testing tenants!'));



// @route GET api/books
// @description Get all books
// @access Public

// @route GET api/books/:id
// @description Get single book by id
// @access Public
Tenant.post('/:id', (req, res) => {

 
  const db = require("./db");
  const dbName = "flatmate";
  const collectionName = "tenants";
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

Tenant.post('/register', (req, res) => {
  var itememail = req.body.email;
  var itemname = req.body.userid;
  var itemphone = req.body.phone;
  var itempassword = req.body.password;

  const db = require("./db");
  const dbName = "flatmate";
  const collectionName = "tenants";
  db.initialize(dbName, collectionName, function (dbCollection) { // successCallback
    var itememail = req.body.email;
    var itemname = req.body.name;
    var itemphone = req.body.phone;
    var itempassword = req.body.password;
    dbCollection.insert({ 

      'userid': req.body.name,
      'type':req.body.type,
    'Area':req.body.SelectedAreas,
    'Rent':req.body.rent,
    'DatetoCome':req.body.datetocome,
    'HowDays':req.body.timelength,
    'RoomFurnishing':req.body.RoomFurnishing,
    'Internet': req.body.Internet,
    'BathRoomType': req.body.BathRoomType,
    'Parking': req.body.Parking,
    'MaxNumberoflatemate': req.body.MaxNumberoflatemate,
    'picstring': req.body.picstring,
    'thisplaceisfor': req.body.thisplaceisfor,
    'myname ': req.body.myname,
    'age': req.body.age,
    'gender': req.body.gender,
    'employeestatus': req.body.employeestatus,
    'lifestyle': req.body.lifestyle,
    'abouturselfparagraph': req.body.abouturselfparagraph



    }, (error, result) => {
      console.log(result);
      console.log(error);
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
Tenant.post('/', (req, res) => {
  console.log("insdie get router");
});

// @route GET api/books/:id
// @description Update book
// @access Public
Tenant.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
Tenant.delete('/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a book' }));
});

module.exports = Tenant;
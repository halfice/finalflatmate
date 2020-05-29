// routes/api/books.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

var Bids = express.Router();

// @route GET api/books/test
// @description tests books route
// @access Public


// @route GET api/books
// @description Get all books
// @access Public

// @route GET api/books/:id
// @description Get single book by id
// @access Public
Bids.get('/', (req, res) => {

 
  const db = require("./db");
  const dbName = "flatmate";
  const collectionName = "bids";
  db.initialize(dbName, collectionName, function (dbCollection) { // successCallback
    //var itemId = req.body.userid;
    console.log("Wer"+ req.query.id);
    var itemId = req.query.id;
    dbCollection.find({ 'userid': itemId }, (error, result) => {
      if (error) throw error;
      
      res.json(result);
    });
  }, function (err) { // failureCallback
    throw (err);
  });




});



Bids.post('/register', (req, res) => {
  var LoginUserID=req.body.LoginUserID;
  var productName= req.body.productName;
  var productvideo=req.body.productvideo;
  var productpic=req.body.productpic;
  var productprice=req.body.productprice;
  var productnumber="223";
  var producthour=req.body.producthour;
  var isWarranty=req.body.isWarranty;
  var itemid=req.body.itemid;
  const db = require("./db");
  const dbName = "flatmate";
  const collectionName = "bids";
  db.initialize(dbName, collectionName, function (dbCollection) { // successCallback
    dbCollection.insert(
      { 
         'LoginUserID':req.body.LoginUserID,
         'productName': req.body.productName,
         'productvideo':req.body.productvideo,
         'productpic':req.body.productpic,
         'productprice':req.body.productprice,
         'productnumber':"223",
         'producthour':req.body.producthour,
         'isWarranty':req.body.isWarranty,
         'itemid':req.body.itemid,
    }
      , (error, result) => {
      var _userId = result["ops"][0]["_id"];
      if (error) throw error;
      res.json(_userId);
    });
  }, function (err) { // failureCallback
    throw (err);
  });
});



// @route GET api/books/:id
// @description Update book
// @access Public
Bids.put('/:id', (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then(book => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
Bids.delete('/:id', (req, res) => {
  Book.findByIdAndRemove(req.params.id, req.body)
    .then(book => res.json({ mgs: 'Book entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a book' }));
});

module.exports = Bids;
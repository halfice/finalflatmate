// routes/api/books.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

var Cardstenants = express.Router();




// @route GET api/books/test
// @description tests books route
// @access Public

Cardstenants.get('/', (req, res) => {

    const db = require("./db");
    const dbName = "flatmate";
    const collectionName = "tenants";





    db.initialize(dbName, collectionName, function (dbCollection) { // successCallback
    
        dbCollection.find({}).limit(5).toArray(function(err, result) {
            if (err) throw err;
           // console.log(result);
           res.json(result);
          });


        
        }, function (err) { // failureCallback
          throw (err);
        });
    
  
  
  });


module.exports = Cardstenants;
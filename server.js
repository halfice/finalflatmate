const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;







app.use(cors());
app.use(bodyParser.json());
const userRoutes = require('./Users');
const tenantroutes = require('./Tenants');
const OwnerRoutes=require('./Owners');
const CardsRoutes=require('./Cards');
const CartTenantsRoutes=require('./Cardstenants');
app.use(bodyParser.urlencoded({
  extended: true
}));





const axios = require('axios');
const multer = require('multer');


app.use('/users', userRoutes);
app.use('/tenant', tenantroutes);
app.use('/owner', OwnerRoutes);
app.use('/card', CardsRoutes);
app.use('/cardtenants', CartTenantsRoutes);


app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
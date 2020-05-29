const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(cors());

const userRoutes = require('./Users');
const tenantroutes = require('./Tenants');
const OwnerRoutes=require('./Owners');
const CardsRoutes=require('./Cards');
const CartTenantsRoutes=require('./Cardstenants');
const cardBids=require('./CardsBids');
const CartBids=require('./Bids');

app.use('/users', userRoutes);
app.use('/tenant', tenantroutes);
app.use('/owner', OwnerRoutes);
app.use('/card', CardsRoutes);
app.use('/cardtenants', CartTenantsRoutes);
app.use('/bids', CartBids);
app.use('/cardbids', cardBids);

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
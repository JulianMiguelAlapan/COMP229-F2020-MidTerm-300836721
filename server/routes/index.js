/*
Name: COMP229-F2020-MidTerm-300836721
Author: Julian Miguel Alapan
Student#: 300836721
WebsiteName: https://comp229-f2020-300836721.herokuapp.com/
Description: MidTerm
*/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;

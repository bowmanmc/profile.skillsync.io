'use strict';

var express = require('express');
var router = express.Router();

var katy = require('./katy');


/* GET home page. */
router.get('/', function(req, res) {
    var account = katy.account;
    var resume = katy.resume;

    res.render('index', {
        account: account,
        resume: resume
    });
});

module.exports = router;

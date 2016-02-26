'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var account = {
        name: 'Katy Bowman'
    };

    res.render('index', {
        account: account
    });
});

module.exports = router;

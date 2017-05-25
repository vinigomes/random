var url = require('url');
var express = require('express');
var router = express.Router();

/* GET random number. */
router.get('/numeric', function(req, res, next) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var params = url.parse(req.url, true).query;
    var input = params.number;
    var numInput = new Number(input);
    var numOutput = new Number(Math.random() * numInput).toFixed(0);
    res.write(numOutput);
    res.end();
});

/* GET random string. */
router.get('/string', function(req, res, next) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var params = url.parse(req.url, true).query;
    var input = params.size;
    var size = parseInt(input);
    var letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    var stringOutput = '';
    for (var i = 0; i < size; i++) {
        var rnum = Math.floor(Math.random() * letters.length);
        stringOutput += letters.substring(rnum, rnum + 1);
    }
    res.write(stringOutput);
    res.end();
});

module.exports = router;

/**
 * Created by Vinícius Roggia Gomes on 25/05/2017.
 */
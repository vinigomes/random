var url = require('url');
var express = require('express');
var router = express.Router();
var RandomNumberGenerator = require('../app/RandomNumberGenerator');
var RandomStringGenerator = require('../app/RandomStringGenerator');

/* GET random number. */
router.get('/numeric', function(req, res, next) {
    let params = url.parse(req.url, true).query;
    let input = params.number;
    let randomNumberGenerator = new RandomNumberGenerator(Number(input));
    let generatedNumber = randomNumberGenerator.generate();
    res.status(200).send(generatedNumber);
});

/* GET random string. */
router.get('/string', function(req, res, next) {
    let params = url.parse(req.url, true).query;
    let input = params.size;
    let randomStringGenerator = new RandomStringGenerator(Number(input)) ;
    let generatedString = randomStringGenerator.generate();
    res.status(200).send(generatedString);
});

module.exports = router;
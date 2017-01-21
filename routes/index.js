var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Timelines
router.get('/timelines', function(req, res){
  res.render('timelines');
});

// Events
router.get('/events', function(req, res){
  res.render('events');
});

// People
router.get('/people', function(req, res){
  res.render('people');
});

// Places
router.get('/places', function(req, res){
  res.render('places');
});

module.exports = router;

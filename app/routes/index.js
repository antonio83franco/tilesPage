var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { 
  	placeholder: [{
		title: "loading data...",
		price: "1"
  	}]
  });
});

module.exports = router;

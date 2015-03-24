var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET cars listing. */
router.get('/', function(req, res) {

	var data = JSON.parse(fs.readFileSync('public/data/data.json', 'utf8')),
		parsedData = [],
		category = "cars",
		i;

	for(i=0; i<data.length; i++) {
		if(category === data[i].category) {
			parsedData.push(data[i]);
		}
	}

	res.send(parsedData);
});

module.exports = router;

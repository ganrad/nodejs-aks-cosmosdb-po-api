var express = require('express');
var router = express.Router();

// Re-direct to /orders
router.get('/', function(req, res) {
	res.redirect('/orders');
});

module.exports = router;

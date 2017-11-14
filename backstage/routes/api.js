var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/give', function(req, res, next) {
  res.send( '数据库出兮兮了')  
});

module.exports = router;

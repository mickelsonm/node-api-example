var express = require('express');
var router = express.Router();

router.route("/")
  .get(function(req,res){
    console.log('called get user');
    res.json({ response: 'get user' });
  });

module.exports = router;

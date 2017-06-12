var express = require('express');
var router = express.Router();
var _request = require('request');

router.route("/")
  .get(function(req,res){
    console.log('called get user');
    res.json({ response: 'get user' });
  });

router.route("/external")
  .get(function(req,res){
    _request({
      uri: 'http://google.com',
      method: 'get'
    }, function(err,resp,body){
      if(err){
        res.json({ error: 'failed to call google'});
      } else{
        res.json({ response: resp.body });
      }
    });
  });

module.exports = router;

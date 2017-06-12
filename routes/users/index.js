var express = require('express');
var router = express.Router();
var _request = require('request');

router.route("/")
  .get(function(req,res){
    //we use console.log() just to show on our api that the route got called!
    console.log('called get user');
    res.json({ response: 'get user' });
  });

router.route("/external")
  .get(function(req,res){
    //this is just an example showing how we could call another source (ex. api)
    _request({
      uri: 'http://google.com',
      method: 'get'
      //,json: resp.body -- used to pass json data using post, put, etc
    }, function(err,resp,body){
      if(err){
        res.json({ error: 'failed to call google'});
      } else{
        res.json({ response: resp.body });
      }
    });
  });

module.exports = router;

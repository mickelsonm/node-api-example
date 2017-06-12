var express = require('express');
var app = express();

var bodyParser = require('body-parser');

//global settings, middleware, etc
app.use(bodyParser.urlencoded({
  extended: true,
  limit: '5m'
}));
app.use(bodyParser.json());

//sets up global routing
var router = express.Router();

router.get('/', function(req,res){
  res.json({
    greeting: 'Hello World'
  });
});

//sets up routes within our application
var users = require("./routes/users");
app.use('/users', users);

//hooks up our router to this application
app.use('/', router);

//our app eagerly listens on its default port or port set on the
//appropriate environment variable
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('listening on', port);
});

var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '5m'
}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = express.Router();

router.get('/', function(req,res){
  res.json({
    greeting: 'Hello World'
  });
});

var users = require("./routes/users");
app.use('/users', users);

app.use('/', router);

app.listen(port, function(){
  console.log('listening on', port);
});

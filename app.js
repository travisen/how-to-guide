
var express = require('express');

var app = express();
var handlebars= require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3003);
app.use(express.static('public'));

app.get('/',function(req,res){
  var content = {};
  content.type = "GET";
  res.render('home', content);
});

app.post('/', function(req,res){
  var content = {};
  content.type = "POST";
  res.render('home', content);
});

// app.use(function(req,res){
//   res.status(404);
//   res.render('404');
// });

// app.use(function(err, req, res, next){
//   console.error(err.stack);
//   res.status(500);
//   res.render('500');
// });

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

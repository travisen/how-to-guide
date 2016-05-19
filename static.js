
var express = require('express');

var app = express();
var handlebars= require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3003);
app.use('/static', express.static('public'));

app.get('/home',function(req,res){
  res.render('home');
});

app.get('/intro',function(req,res){
  res.render('introduction.handlebars');
});

app.get('/api-part1',function(req,res){
  res.render('api-part1.handlebars');
});

app.get('/api-part2',function(req,res){
  res.render('api-part2.handlebars');
});

//app.post('/', function(req,res){
//  res.render('home');
//});

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

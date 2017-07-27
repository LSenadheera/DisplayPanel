var express = require('express'),
    Login = require('./routes/login');
	List = require('./routes/list');
	Deals = require('./routes/deals');
 
var app = express();

//address the CORS conflicts cross browser access
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});
 


//connect the methods to js functions!


app.get('/reg/:id/:age',Login.test );
app.get('/fruit', List.fruit );
app.get('/vege', List.vege );
app.get('/fruit', List.fruit );
app.get('/meat', List.meat );
app.get('/beverage', List.beverage );
app.get('/dairy', List.dairy );
app.get('/canned', List.canned );
app.get('/paper', List.paper );
app.get('/personal', List.personal );
app.get('/other', List.other );

app.get('/discount', Deals.discount );
app.get('/offer', Deals.offer );
app.get('/promotion', Deals.promotion );

//start to listen........

app.listen(3000);
console.log('Listening on port 3000...');

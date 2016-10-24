var express = require('express');  //we need this to set up the server and express stuff with it
var app     = express();          //now we are calling express
var path    = require('path');
var bodyParser = require('body-parser');

app.set('view engine', 'hbs'); //has to be done before we set controllers
app.set('views', path.join(__dirname, '/views'));
// app.set('views', __dirname + '/views'))

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.get('/', function(req, res, next){
// 	res.send('Woot');
// })

app.use('/firstone', require('./controllers/firstone'));





// var centerCtrl = require('./controllers/firstone.js')
// console.log(centerCtrl, 'This is center')
// app.use('/saturday', centerCtrl)



// app.use('/firstone', require('./controllers/firstone'))



// app.get('/', function(req, res, next){
// 	res.send('Woot');
// })



app.listen(3000, function (){
	console.log('server is running')
})
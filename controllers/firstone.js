var express = require('express');
var centerCtrl = express.Router(); //express.Router(); lets us use methods get request, respond, and send

// centerCtrl.get('/', function(req, res, next){
	//we have to define a response, or else we get spinning circel and timeout error
// 	res.send('hej')

// })

centerCtrl.get('/', function(req, res, next){
	res.send('Woot');
})


centerCtrl.get('/worstdayofweek', function(res, req, next){

	res.render('worstdayofweek', {name: 'haily'})
})


centerCtrl.post('/hopeItWorks', function(req, res, next){
	console.log(req.body, 'this should be our form object')
	res.send('got the request')

})


centerCtrl.get('/hopeItWorks', function(req, res, next){
	res.render('hopeItWorks', {})
})


// centerCtrl.get('/mondaymonday', function(req, res, next){
// 	res.render('worstdayofweek', {waitingfor: 'Everybodys working for the weekend'})
// })


module.exports = centerCtrl;
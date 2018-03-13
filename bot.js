var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);

var interval;
var reminder = function(){

	Twitter.post('statuses/update', { status: 'Reminder to stay hydrated.' }, function(err, data, response) {
  		console.log(data)
	})
}

function init() {
    var myFunction = function() {
        reminder();
	//50,400,000 miliseconds = 14 hours
	//79,200,000 miliseconds = 22 hours
	var max = 50400000;
	var min = 79200000;
        var rand = Math.floor(Math.random() * (max-min+1) + min
        setTimeout(myFunction, rand);
    }
    myFunction();
}

init();

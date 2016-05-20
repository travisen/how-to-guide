var schedule = require('node-schedule');
var date = new Date(2016, 11, 21, 5, 30, 0);
 
var j = schedule.scheduleJob(date, function(){
  console.log('I am the master of my fate/I am the captain of my soul');
});
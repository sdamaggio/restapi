//run node index
//browse http://localhost:4000/api
const express = require('express');

// set up an express app
const app = express();

app.get('/api', function(req, res){
  console.log('GET request');
  res.send({ name: 'Yoshi'});
});

app.post('/api', function(req, res){
  console.log('POST request');
  res.send({ name: 'Yoshi'});
});


// listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('now listening for requests')
});

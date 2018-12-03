//run node index (or nodemon index)
//browse http://localhost:4000/api/farmers
const express = require('express');

// set up an express app
const app = express();

// initialize routes
app.use('/api', require('./routes/api'));




// listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('now listening for requests')
});

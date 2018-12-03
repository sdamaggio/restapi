//run node index (or nodemon index)
//browse http://localhost:4000/api/farmers
/* POST example
{
	"name": "Steve",
	"product": "red wine",
	"available": true
}
*/


const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up an express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/farmerdata');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());


// initialize routes
app.use('/api', require('./routes/api'));




// listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('now listening for requests')
});

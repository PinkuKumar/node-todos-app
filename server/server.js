const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');  //.js is implied, uses object destructuring
var {User} = require('./models/user');
var {Todo} = require('./models/todo');

var app = express();

// middleware
//A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body).
app.use(bodyParser.json()); //returns a function and only works when content type is json


app.post('/todos',(req,res) => {
//  console.log(req.body) //body comes from body-parser
var newTodo = new Todo({
  text: req.body.text
})
newTodo.save().then((doc) => {
  res.status('200').send(doc);
}, (err) =>{
  res.status('400').send(err);
});


  //res.status.send

} )



app.listen(3000,()=>{
  console.log("app started on port 3000")
})

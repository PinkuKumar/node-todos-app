const mongoose = require('mongoose');
//connect to db
mongoose.connect('mongodb://localhost:27017/TodoApp');
//
mongoose.Promise = global.Promise;

//create the model
var Todo = mongoose.model('Todo',{
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
})

//create the document
var FirstTodo = new Todo({
  text: 'Eat lunch',
  completed: false,
  completedAt:04292018
});

FirstTodo.save().then((doc) =>{
  console.log('Saved: ' + doc)
},(err) => {
  console.log('Error' + err)
});


var User = mongoose.model('User',{
  email:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  },
  name:{
    type:String,
    required: true,
    trim:true,
    minlength:5,
    maxlength:10

  }
})
var Pinku = new User({
  name:' Pinku ',
  email:'some email'
});

Pinku.save().then((doc) =>{
  console.log(JSON.stringify(doc,undefined,2))
}, (err)=>{
  console.log('Error'+ err)

});

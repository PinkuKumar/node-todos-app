const mongoose = require('mongoose');

//create the model
var Todo = mongoose.model('Todo',{
  text: {
    type: String,
    required: true,
    trim:true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
})

module.exports = {Todo};

// //create the document
// var FirstTodo = new Todo({
//   text: 'Eat lunch',
//   completed: false,
//   completedAt:04292018
// });
// //save
// FirstTodo.save().then((doc) =>{
//   console.log('Saved: ' + doc)
// },(err) => {
//   console.log('Error' + err)
// });

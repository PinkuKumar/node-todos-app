const mongoose = require('mongoose');

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

module.exports = {User};

//to create and save data - 
// var Pinku = new User({
//   name:' Pinku ',
//   email:'some email'
// });
//
// Pinku.save().then((doc) =>{
//   console.log(JSON.stringify(doc,undefined,2))
// }, (err)=>{
//   console.log('Error'+ err)
//
// });

//const MongoClient = require('mongodb').MongoClient;
// line below is same as line above using destructuring syntax
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  //deleteOne
  // db.collection('Users').deleteOne({name:'Magic'}).then((result) =>{
  //   console.log(JSON.stringify(result,undefined,2))
  //
  // },(err) =>{
  //   if (err){
  //     console.log("error")
  //   }
  // })


  //deleteMany
  // db.collection('Users').deleteMany({name:'Magic'}).then((result) =>{
  //   console.log(JSON.stringify(result,undefined,2))
  //
  // },(err) =>{
  //   if (err){
  //     console.log("error")
  //   }
  // })


  //findOneAndDelete - deletes but also returns details of the object deleted
  db.collection('Users').findOneAndDelete({_id:new ObjectID('5ae3975d2a5d937e1406e227')}).then((result) =>{
    console.log(JSON.stringify(result,undefined,2))

  },(err) =>{
    if (err){
      console.log("error")
    }
  })


  db.collection('Users').find().toArray().then((docs) => {
    console.log ("Found these users:")
    console.log(JSON.stringify(docs,undefined,2))

  },(err) => {
    if(err){
      console.log('Error: ' + err);
    }
  });



  //db.close();
  client.close();
  });

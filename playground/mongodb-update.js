//const MongoClient = require('mongodb').MongoClient;
// line below is same as line above using destructuring syntax
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

//findOneAndUpdate(filter{object},updates{operator:{object}},options{object})

  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5aded405115b1b32ac17481c')
  },{
    $set:{
      location: 'Philly'
    },
    $inc:{
      age:-5
    }
    },
    {
      returnOriginal:false
    }).then((result) =>{
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

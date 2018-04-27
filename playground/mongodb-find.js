//const MongoClient = require('mongodb').MongoClient;
// line below is same as line above using destructuring syntax
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  db.collection('Users').find().toArray().then((docs) => {
    console.log(JSON.stringify(docs,undefined,2))

  },(err) => {
    if(err){
      console.log('Error: ' + err);
    }
  });

  db.collection('Todos').find({_id: new ObjectID('5ae3875a2a5d937e1406de02')}).toArray().then((docs) => {
      console.log('Find by id:');
      console.log(JSON.stringify(docs,undefined,2));
  }, (err) => {
    if(err){
      console.log('Error: ' + err);
    }
  });

  db.collection('Users').find({name: 'Mongini'}).toArray().then((docs) => {
      console.log('Find by name:');
      console.log(JSON.stringify(docs,undefined,2));
  }, (err) => {
    if(err){
      console.log('Error: ' + err);
    }
  });

  db.collection('Users').find().count().then((count) => {
      console.log(`User count is ${count}`);
  }, (err) => {
    if(err){
      console.log('Error: ' + err);
    }
  });

  //db.close();
  client.close();
  });

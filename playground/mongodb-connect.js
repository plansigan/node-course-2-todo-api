//var MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id:new ObjectID('596efec76269b30d38588f3c')
  // }).toArray().then((docs)=>{
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log("unable to fetch Todos",err)
  // });

  db.collection('Todos').find().count().then((count)=>{
    console.log(`Todos count: ${count}`);
  },(err)=>{
    console.log("unable to fetch Todos",err)
  });

  //db.close();
});

//CRUD create read update delete 
//Command to start MongoDB /Users/tbaldecchi/mongodb/bin/mongod --dbpath=/Users/tbaldecchi/mongodb-data

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id  = new ObjectID()

MongoClient.connect(connectionURL,{useNewUrlParser: true},(error,client) =>{
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName);

    db.collection('tasks').deleteOne({
        _id: new ObjectID("5eb579e40b8f304a2e2acaaf")
    }).then((result) =>{
        console.log(result)
    }).catch((error) =>{
        console.log(error)
    })
})
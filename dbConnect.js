require('dotenv').config()

// MongoClient
const MongoClient = require('mongodb').MongoClient; // create a MongoClient. by calling it from the require file, call MongoClient class from it. Store it into a constant.

// Database connection via MongoDB
const uri = "mongodb+srv://"+process.env.MONGO_USER+":"+process.env.MONGO_PASSWORD+"@cloudbootcamp.ngbrg.mongodb.net/SIT725_2022?retryWrites=true&w=majority" // no hyphen is accepted for database name
const client = new MongoClient(uri,{ useNewUrlParser: true })

let projectCollection;

// connect client
client.connect((err,db) => {

    if(!err){
        console.log('Database Connected')
    }else{
        console.log('[error]',err)
    }
});

exports.mongoClient = client;
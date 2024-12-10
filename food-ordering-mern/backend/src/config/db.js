const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose")

const uri = "mongodb+srv://rkhan01aa:exXFNyboenz0AULn@cluster0.k42mj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



// "mongodb+srv://ashokzarmariya90:V6iwPHCeWMMGvKaW@cluster0.hgjvduv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
  return mongoose.connect(uri)
}

module.exports = connectToDB;



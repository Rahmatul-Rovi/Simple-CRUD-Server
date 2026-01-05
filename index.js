const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion} = require('mongodb');
const cors = require('cors');
const port = process.env.PORT ||3000; 


//User: SimpleDBUser
//Password:XLMo3CWnjiegYnFj
const uri = "mongodb+srv://SimpleDBUser:XLMo3CWnjiegYnFj@cluster0.bou0ahg.mongodb.net/?appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run(){
     try{
      await client.connect();
      await client.db('admin').command({ping:1});
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
     }
     finally{

     }
}
run().catch(console.dir);

//middleWare
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Simple CRUD server running");
})

app.listen(port, ()=> {
    console.log(`SimpleCRUD server is running on, ${port}`);
})
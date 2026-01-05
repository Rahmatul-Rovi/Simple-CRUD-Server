const express = require('express');
const app = express();

const cors = require('cors');
const port = process.env.PORT ||3000; 


//User: SimpleDBUser
//Password:XLMo3CWnjiegYnFj


//middleWare
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send("Simple CRUD server running");
})

app.listen(port, ()=> {
    console.log(`SimpleCRUD server is running on, ${port}`);
})
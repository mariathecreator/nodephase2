import express from "express"
import { MongoClient, ObjectId } from "mongodb"

const app = express();

app.use(express.json())

const client = new MongoClient("mongodb://127.0.0.1:27017/")
await client.connect()
const db = client.db("phase3")
const users = db.collection('users')

app.post('/user', async (req, res) => {
    const insert = await users.insertOne(req.body)
    res.send(insert)
    console.log(insert);
});

app.get('/user/:id',async(req,res)=>{
    const find = await users.find({_id:new ObjectId(req.params.id)}).toArray()
    res.send(find)
    console.log(find);   
})

app.put('/user/:id',async(req,res)=>{
    const update = await users.updateOne({_id:new ObjectId(req.params.id)},
        {$set:req.body}
    )
    console.log(update);
})

app.delete('/user/:id',async(req,res)=>{
    const deleted = await users.deleteOne({_id:new ObjectId(req.params.id)})
    console.log(deleted);  
})

app.listen(3000, () => {
    console.log("server listening at port:3000");
})
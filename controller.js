import { usermodel} from "./model.js"; 
import {ObjectId} from "mongodb"

const insert = async (req,res)=>{
    const inside=await usermodel.insertMany(req.body)
    res.send(inside)
}
const findr =async(req,res)=>{
    const fin=await usermodel.find()
    res.send(fin)
}
const finder = async(req,res)=>{
    const id = new ObjectId(req.params.id)
  const find=  await usermodel.findOne({_id:id})
  res.send(find)
}

const update=async(req,res)=>{
    const para = new ObjectId(req.params.id)
    const updte =await usermodel.updateOne({_id:para},{$set:req.body})
    res.send(updte)
}

const updateOne =async(req,res)=>{
    const parad =new ObjectId(req.params.id)
    const update =await usermodel.updateMany({_id:parad},{$set:req.body})
    res.send(update)
}
const del = async(req,res)=>{
    const parid =new ObjectId(req.params.id)
    const delte=await usermodel.deleteOne({_id:parid})
    res.send(delte)
}

export {insert,findr,finder,update,updateOne,del}
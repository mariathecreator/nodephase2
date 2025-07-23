import express from 'express'
const route=express.Router()

import {insert,findr,finder,update,updateOne,del} from "./controller.js"

route.post('/insert',insert)
route.get('/find',findr)
route.get('/find/:id',finder)
route.put('/update/:id',update)
route.patch('/update/:id',updateOne)
route.delete('/delete/:id',del)

export default route
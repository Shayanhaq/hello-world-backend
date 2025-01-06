import express from 'express'
import { products } from "./productData.mjs"

import cors from "cors"
const app = express()
const port = process.env.port ||  3001

app.use(cors())

app.get('/', (req, res) => {
  res.send({name: 'Shayan', age : 21 })
})

app.get('/Product', (req, res) => {
    console.log("req", req);
   
    // res.send({name: 'Cream', price : 120 , quuantity : "125g" })
  res.send(products)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
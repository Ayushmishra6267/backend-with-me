const dotenv = require('dotenv');
dotenv.config();
const express = require("express")
const app = express()
const port= 3000

app.get('/',(req,res)=>{
  res.send('Hello World')
})

app.get('/shoes',(req,res)=>{
  res.send('shoes are available')
})

app.get('/sleeper',(req,res)=>{
  res.send('sleepers are available')
})

app.listen(process.env.PORT,()=>{
  console.log(`Example app listening on port ${port}`)
})
console.log("Ayush");

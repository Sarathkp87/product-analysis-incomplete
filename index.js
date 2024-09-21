const express =require('express');

const cors=require('cors');

const logic =require('./services/logic')

//server creation
const server =express()

server.use(cors({
    origin:'http://localhost:3000'
}))

server.use(express.json())

server.use.listen(8000,()=>{
    console.log('listnening on the port');
})

//get all products
server.get('allProducts',(req,res)=>{
    logic.allProducts().then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//just testing something 
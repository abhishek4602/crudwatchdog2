const express = require ('express')
const router = express.Router()
const Visitor= require('../models/visitor')
router.get('/',async(req,res) => {
    try
    {
        const visitors=await Visitor.find()
        res.json(visitors)
    }
    catch(err){}
})

// router.post('/',async(req,res)=>{
//     console.log('Post call')
//     console.log(JSON.stringify(req.body.name))
//     const visitor= new Visitor({
//         name: "a",
//         temp: JSON.stringify(req.body.temp)
//         // visitorDestinationFlat:req.body.visitorDestinationFlat,
//         // visitorType:req.body.visitorType,
//         // visitorVehicleNumber:req.body.visitorVehicleNumber
       
//     })  
    
//     try{
//         const v1= await visitor.save()
//         res.json(v1)
//     }catch(Err){console.log(Err)}
// })

module.exports =router
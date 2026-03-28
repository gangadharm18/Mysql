const {Op } = require('sequelize');
const buses=require('../models/busesmodel');
const sequelize = require('sequelize');

const getbuses=async(req,res)=>{
     try {
        const allbuses=await buses.findAll();
         if(allbuses.length===0){
              res.status(200).send("there are no buses")
             return;
        }
        res.status(200).send(allbuses)

    } catch (error) {
        res.status(500).send(error.message)
    }
    
}

//add insert
const addbuses=async(req,res)=>{

     try {
        const {busNumber,totalSeats,availableSeats}=req.body;
         
         await buses.create({
         busNumber:busNumber,
         totalSeats:totalSeats,
         availableSeats:availableSeats
        })
        res.status(200).send(`buses ${busNumber} added`)
    } catch (error) {
        res.status(500).send(error.message)
    }
    

    
}
//get more than
const getbusesMorethan=async(req,res)=>{
    try {
        const requested=parseInt(req.params.seats);
        const Buses=await buses.findAll({
            where:{
                availableSeats:{
                    [Op.gt]:requested
                }
                
            }
         })
        
        if(Buses.length===0){
            res.status(404).send(`no buses found more than ${requested} seats`)
             return;
        }
       res.status(200).send(Buses)

    } catch (error) {
        res.status(500).send(error.message)
    } 
}
//update]
const updateBus=async(req,res)=>{
    try {
        const id=req.params.id;
        const {busNumber,totalSeats,availableSeats}=req.body;
        const bus=await buses.findByPk(id)
        if(!bus){
         res.status(404).send("bus  not found")
         return;
        }
       if(busNumber)bus.busNumber=busNumber;
       if(totalSeats)bus.totalSeats=totalSeats;
       if(availableSeats)bus.availableSeats=availableSeats;
        await bus.save()
 
       res.status(200).send(`bus with busNumber ${busNumber} updated`)
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}
//delete
const deletebus=async(req,res)=>{
    const {id}=req.params;
    const bus=await buses.destroy({
        where:{
            id:id
        }
    })
    if(!bus){
        res.status(404).send("bus  not found")
         return;
    }
    res.status(200).send("selected bus deleted")
}

module.exports={

    addbuses,
    getbuses,
    getbusesMorethan,
    updateBus,
    deletebus
  
}
const db=require('../utils/db-connection')
const bookings=require('../models/bookingmodel');


const addBooking=async(req,res)=>{
    try {
        const {seatNumber}=req.body;
        await bookings.create({
        seatNumber:seatNumber
    })
    res.status(200).send(`seatnumber ${seatNumber} booked`)
    } catch (error) {
        res.status(500).send(error.message)
    }
   

}
const updateBooking=async(req,res)=>{
    try {
        const id=req.params.id;
        const {seatNumber}=req.body;
        const booked=await bookings.findByPk(id)
        if(!booked){
            res.status(404).send("student not found")
            return;
        }
        booked.seatNumber=seatNumber;
        await booked.save();
        res.status(200).send(`seatNumber  updated to ${seatNumber}`)

    } catch (error) {
         res.status(500).send(error.message)
    }
    

}
//delete
const deleteBooking=async(req,res)=>{
    try {
        const id=req.params.id;
        const booked=await bookings.destroy({
            where:{
                id:id
            }
        })
        if(!booked){
             res.status(404).send("Booking for that seat not found")
            return;
        }
        res.status(200).send(`bookings  deleted with id ${id}`)
    } catch (error) {
         res.status(500).send(error.message)
    }
    
}
const getBooking=async(req,res)=>{
    try {
         const booked=await bookings.findAll();
        if(booked.length===0){
          res.status(404).send("No Bookings found")
            return;
        } 
         res.status(200).json(booked)

    } catch (error) {
         res.status(500).send(error.message)
    }
    
}

module.exports={
    addBooking,
    updateBooking,
    deleteBooking,
    getBooking
}
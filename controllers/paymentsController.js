const db=require('../utils/db-connection')
const payments=require('../models/paymentsmodel');
const { all } = require('axios');


const getpayments=async(req,res)=>{
    try {
        const allpayments=await payments.findAll();
         if(allpayments.length===0){
              res.status(200).send("there are no payments")
             return;
        }
        res.status(200).send(allpayments)

    } catch (error) {
        res.status(500).send(error.message)
    }
    

}


const addPayment=async(req,res)=>{
    try {
         const {amountPaid,paymentStatus}=req.body;
         await payments.create({
         amountPaid:amountPaid,
         paymentStatus:paymentStatus
        })
        res.status(200).send(`new payment ${amountPaid} added`)

    } catch (error) {
        res.status(500).send(error.message)
    }
    

}
const updatpayment=async(req,res)=>{
    try {
        const id=req.params.id;
        const {amountPaid,paymentStatus}=req.body;
        const payment= await payments.findByPk(id);
        if(!payment){
            res.status(404).send("payment not found")
             return;
        }
        if(amountPaid)payment.amountPaid=amountPaid;
        if(paymentStatus)payment.paymentStatus=paymentStatus;
        await payment.save();
        res.status(200).send(`payment updated`)

    } catch (error) {
        res.status(500).send(error.message)
    }
    
   

}
//delete
const deletpayment=async(req,res)=>{
    try {
         const id=req.params.id;
         const payment=await payments.destroy({
            where:{
                id:id
            }
         })
         if(!payment){
            res.status(404).send("payment not found")
             return;
         }
          res.status(200).send(`payment deleted`)

    } catch (error) {
        res.status(500).send(error.message)
    }
   
} 

module.exports={
    addPayment,
    updatpayment,
    getpayments,
    deletpayment
}

const users=require('../models/usersmodel');
const bookings=require('../models/bookingmodel');
const { use } = require('../routes/bookingRoute');
const buses = require('../models/busesmodel');

//adduser
const getusers=async(req,res)=>{
    try {
        const allusers=await users.findAll();
         if(allusers.length===0){
              res.status(200).send("there are no users")
             return;
        }
        res.status(200).send(allusers)

    } catch (error) {
        res.status(500).send(error.message)
    }
    

}
//addor insert
const adduser=async(req,res)=>{
    try {
         const {name,email}=req.body;
         await users.create({
         name:name,
         email:email
        })
        res.status(200).send(`user ${name} added`)

    } catch (error) {
        res.status(500).send(error.message)
    }
    

}

//update user
const updateusername=async(req,res)=>{
    try {
        const id=req.params.id;
        const {name,email}=req.body;
        const user= await users.findByPk(id);
        if(!user){
            res.status(404).send("user not found")
             return;
        }
        if(name)user.name=name;
        if(email)user.email=email;
        await user.save();
        res.status(200).send(`user ${name} updated`)

    } catch (error) {
        res.status(500).send(error.message)
    }
    
   

}

//delete
const deleteuser=async(req,res)=>{
    try {
         const id=req.params.id;
         
         const user=await users.destroy({
            where:{
                id:id
            }
         })
         if(!user){
            res.status(404).send("users not found")
             return;
         }
          res.status(200).send(`user deleted`)

    } catch (error) {
        res.status(500).send(error.message)
    }
   
}

//getuserbookinhg
const userbooking=async(req,res)=>{
    // console.log("req.params:", req.params);

     try {
        const userId=parseInt(req.params.id);
        console.log("user id got",userId)
       const bookingForUser=await bookings.findAll({
        where:{
            userId:userId,
            
        },attributes:["id","seatNumber"],
        include:{model:buses,attributes:["busNumber"]}
       })

       res.status(200).json(bookingForUser);

     } catch (error) {
        res.status(500).send(error.message)
     }
}

module.exports={
    getusers,
    adduser,
    updateusername,
    deleteuser,
    userbooking
}
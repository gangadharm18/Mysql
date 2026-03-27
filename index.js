const express=require('express')
const mysql=require('mysql2');
const app=express()

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'0323',
    database:'busdb'
})

connection.connect((err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("connection has been created")

    const createUserTable=`create table users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(30)
    )`
     const createBusTable=`create table buses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber VARCHAR(10),
    tatalSeats int,
    avilableSeats int
    )`
     const createBookingTable=`create table bookings(
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber int
    )`
     const createPaymentsTable=`create table payments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid int,
    paymentStatus VARCHAR(12)
    )`
    connection.execute(createUserTable,(err)=>{
        if(err){
            console.log(err)
            connection.end()
            return;
        }
        console.log("user table created")
    })
     connection.execute(createBusTable,(err)=>{
        if(err){
            console.log(err)
            connection.end()
            return;
        }
        console.log("bus table created")
    })
     connection.execute(createBookingTable,(err)=>{
        if(err){
            console.log(err)
            connection.end()
            return;
        }
        console.log(" bookings table created")
    })
     connection.execute(createPaymentsTable,(err)=>{
        if(err){
            console.log(err)
            connection.end()
            return;
        }
        console.log("payment table created")
    })
})

app.listen(3000,()=>{
    console.log("listening to server")

})
app.get('/',(req,res)=>{
    res.send("HELLO WORLD!")
})
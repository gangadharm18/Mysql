const mysql=require('mysql2');
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

    const createUserTable=`create table IF not exists users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(30)
    )`
     const createBusTable=`create table IF not exists buses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber VARCHAR(10),
    totalSeats int,
    availableSeats int
    )`
     const createBookingTable=`create table IF not exists bookings(
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber int
    )`
     const createPaymentsTable=`create table IF not exists payments(
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

module.exports=connection;
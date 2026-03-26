const express=require('express')
const mysql=require('mysql2');
const app=express()

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'0323',
    database:'testdb'
})

connection.connect((err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("connection has been created")

    const createTable=`create table student(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(30)
    )`
    connection.execute(createTable,(err)=>{
        if(err){
            console.log(err)
            connection.end()
            return;
        }
        console.log("table created")
    })
})

app.listen(3000,()=>{
    console.log("listening to server")

})
app.get('/',(req,res)=>{
    res.send("HELLO WORLD!")
})
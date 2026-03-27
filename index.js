const express=require('express')
const app=express()
app.use(express.json());
const db=require('./utils/db-connection')
const usersRoute=require('./routes/usersRoute')
const busesRoute=require('./routes/busesRoute')
// const paymentsRoute=require('./routes/paymentsRoute')
// const bookingsRoute=require('./routes/bookingRoute')

app.listen(3000,()=>{
    console.log("listening to server")

})
app.get('/',(req,res)=>{
    res.send("HELLO WORLD!")
})
app.use('/users',usersRoute)
app.use('/buses',busesRoute)
// app.use('/booking',bookingsRoute)
// app.use('/payments',paymentsRoute)
app.use((req,res)=>{
    res.status(404).send("Page not Found")
})
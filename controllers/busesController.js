const db=require('../utils/db-connection')


const getbuses=(req,res)=>{
    const getQuery=`select busNumber from buses`
    db.execute(getQuery,(err,result)=>{
         if(err){
            console.log(err)
            res.status(500).send(err.message)
           
            return;
        }
         if(result.length===0){
             res.status(200).send("there are no buses")
             return;
        }
        res.status(200).send(result)
    })
}


const addbuses=(req,res)=>{
    const {busNumber,totalSeats,availableSeats}=req.body;
    const addQuery=`insert into buses(busNumber,totalSeats,availableSeats) 
    values(?,?,?)`

    db.execute(addQuery,[ busNumber,totalSeats,availableSeats],(err)=>{
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            
            return;
        }
        console.log("buses added")
        res.status(200).send(`buses ${busNumber} added`)
    })

}
const getbusesMorethan=(req,res)=>{
    
    const availables=req.params.seats;
    const getQuery=`select busNumber from buses where availableSeats>${availables}`
    db.execute(getQuery,(err,result)=>{
         if(err){
            console.log(err)
            res.status(500).send(err.message)
           
            return;
        }
         if(result.length===0){
             res.status(200).send(`there are no buses more than ${availables} seats` )
             return;
        }
        res.status(200).send(result)
    })
}
// const updatestudent=(req,res)=>{
//     const id=req.params.id;
//     const {name}=req.body;
//     const updateQuery=`update  students set name=? where id=?`

//     db.execute(updateQuery,[name,id],(err,result)=>{
//         if(err){
//             console.log(err)
//             res.status(500).send(err.message)
            
//             return;
//         }
//         if(result.affectedRows===0){
//             res.status(404).send("student not found")
//             return;
//         }
//         console.log("student updated")
//         res.status(200).send(`student ${name} updated`)
//     })

// }
//delete
// const deleteStudent=(req,res)=>{
//     const id=req.params.id;
   
//     const deleteQuery=`DELETE FROM students where id=?`

//     db.execute(deleteQuery,[id],(err,result)=>{
//         if(err){
//             console.log(err)
//             res.status(500).send(err.message)
           
//             return;
//         }
//         if(result.affectedRows===0){
//             res.status(404).send("student not found")
//             return;
//         }
//         console.log("student deleted")
//         res.status(200).send(`student  deleted with id ${id}`)
//     })

// }

module.exports={

    addbuses,
    getbuses,
    getbusesMorethan
  
}
// const db=require('../utils/db-connection')
// const addstudent=(req,res)=>{
//     const {name,email}=req.body;
//     const addQuery=`insert into students(name,email) 
//     values(?,?)`

//     db.execute(addQuery,[ name,email],(err)=>{
//         if(err){
//             console.log(err)
//             res.status(500).send(err.message)
            
//             return;
//         }
//         console.log("student added")
//         res.status(200).send(`student ${name} added`)
//     })

// }
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
// //delete
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

// module.exports={
//     addstudent,
//     updatestudent,
//     deleteStudent
// }
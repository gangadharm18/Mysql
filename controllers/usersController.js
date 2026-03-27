const db=require('../utils/db-connection')

const getusers=(req,res)=>{
    const getQuery=`select name from users`
    db.execute(getQuery,(err,result)=>{
         if(err){
            console.log(err)
            res.status(500).send(err.message)
           
            return;
        }
        if(result.length===0){
             res.status(200).send("there are no users")
             return;
        }
        res.status(200).send(result)
    })
}


const adduser=(req,res)=>{
    const {name,email}=req.body;
    const addQuery=`insert into users(name,email) 
    values(?,?)`

    db.execute(addQuery,[name,email],(err)=>{
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            
            return;
        }
        console.log("user added")
        res.status(200).send(`user ${name} added`)
    })

}
const updateusername=(req,res)=>{
    const id=req.params.id;
    const {name}=req.body;
    const updateQuery=`update  user set name=? where id=?`

    db.execute(updateQuery,[name,id],(err,result)=>{
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            
            return;
        }
        if(result.affectedRows===0){
            res.status(404).send("user not found")
            return;
        }
        console.log("users updated")
        res.status(200).send(`user ${name} updated`)
    })

}
//delete
const deleteuser=(req,res)=>{
    const id=req.params.id;
   
    const deleteQuery=`DELETE FROM users where id=?`

    db.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            console.log(err)
            res.status(500).send(err.message)
           
            return;
        }
        if(result.affectedRows===0){
            res.status(404).send("users not found")
            return;
        }
        console.log("user deleted")
        res.status(200).send(`user  deleted with id ${id}`)
    })

}

module.exports={
    getusers,
    adduser,
    updateusername,
    deleteuser
}
const express=require('express')
const router=express.Router();
const usercontroller=require('../controllers/usersController')

router.get('/',usercontroller.getusers)
router.post('/add',usercontroller.adduser)
// router.put('/update/:id',)
// router.delete('/delete/:id')

module.exports=router;
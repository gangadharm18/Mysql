const express=require('express')
const router=express.Router();
const usercontroller=require('../controllers/usersController')

router.get('/',usercontroller.getusers)
router.post('/',usercontroller.adduser)
router.put('/:id',usercontroller.updateusername)
router.delete('/:id',usercontroller.deleteuser)
router.get('/:id/bookings',usercontroller.userbooking)

module.exports=router;
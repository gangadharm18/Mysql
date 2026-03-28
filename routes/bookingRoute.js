const express=require('express')
const router=express.Router();
const bookingcontroller=require('../controllers/bookingController')



router.get('/',bookingcontroller.getBooking)
router.post('/',bookingcontroller.addBooking)
router.put('/:id',bookingcontroller.updateBooking)
router.delete('/:id',bookingcontroller.deleteBooking)

module.exports=router;



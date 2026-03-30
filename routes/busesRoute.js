const express=require('express')
const router=express.Router();
const busescontroller=require('../controllers/busesController')


router.get('/',busescontroller.getbuses)
router.post('/',busescontroller.addbuses)
router.get('/morethan/:seats',busescontroller.getbusesMorethan)
router.put('/:id',busescontroller.updateBus)
router.delete('/:id',busescontroller.deletebus)
router.get('/:id/bookings',busescontroller.getbusForUser)

module.exports=router;



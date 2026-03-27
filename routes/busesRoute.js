const express=require('express')
const router=express.Router();
const busescontroller=require('../controllers/busesController')


router.get('/',busescontroller.getbuses)
router.post('/add',busescontroller.addbuses)
router.get('/available/:seats',busescontroller.getbusesMorethan)
// router.put('/update/:id',)
// router.delete('/delete/:id')

module.exports=router;



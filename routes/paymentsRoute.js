const express=require('express')
const router=express.Router();
const paymentscontroller=require('../controllers/paymentsController')



router.get('/',paymentscontroller.getpayments)
router.post('/',paymentscontroller.addPayment)
router.put('/:id',paymentscontroller.updatpayment)
router.delete('/:id',paymentscontroller.deletpayment)

module.exports=router;

  

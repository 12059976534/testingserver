const controller = require('../controler/index')
const express=require("express");
const router=express.Router();


router.post('/createuser',controller.user.create)
router.get('/readuser',controller.user.read)


module.exports = router
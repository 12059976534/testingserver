const db=require('../models')
const controller={}


controller.create=async (req,res,next)=>{
    try {
         let createuser = await db.UserTable.create({
             name:req.body.name
         })

         res.status(200).json({
            mesage: "succes sending crete",
            data: createuser                         
        })
    } catch (error) {
        next(error)
    }
}

controller.read=async (req,res,next)=>{
    try {
         let readuser = await db.UserTable.findAll()

         res.status(200).json({
            mesage: "all data",
            data: readuser                         
        })
    } catch (error) {
        next(error)
    }
}


module.exports = controller

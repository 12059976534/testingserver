const express=require("express");
const app=express();
const morgan=require("morgan")
const route = require('./router/route')

const cors=require('cors')
app.use(cors({
    origin: "*"
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))

// app.use('/',(req,res,next)=>{
//    res.json({
//        tes:"tes"
//    })
// })


app.use('/',route);
// app.use("/assets",express.static("assets")); //asset 


// ===== hendling error ======
app.use((req, res, next) => {
    const error=new Error("Tidak ditemukan");
    error.status = 404;
    next(error);
})



app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message,
            status:error.status
        }
    })
})

// =======================

module.exports=app;
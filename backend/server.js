import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import  Mongoose  from "mongoose";
const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

dotenv.config();
connectDb();

// app.get('/',(req,res)=>{
//     res.send("api is running")
// })
app.post("/login",(req,res)=>{

    const{email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
if(password===user.password){
    res.send({message:"Login Successfull",user:user})
}else{
    res.send({message:"Password didn't match"})
}
        }else{
            res.send({message:"User not Registered"})
        }
    })



})
app.post("/register",(req,res)=>{
    const{name,email,phonenumber,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already registerd"})
        }
        else{
            const user=new User({
                name,
                email,
                phonenumber,
                password
            })
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"Successfully registered,Please Login"})
                }
            })
        }
    })



    })

//ADMIN
app.post("/adminlogin",(req,res)=>{

    const{email,password}=req.body
  if(email=="admin" && password=="admin123")
  {
      res.send({message:"Login successfully"})
        user.save()
  }
  else{
res.send({message:"Not an admin"})
  }
     


})


//product api
app.post("/products",(req,res)=>{
    const{name,brand,dec,price,stock,image}=req.body
    User.insertOne({_id},(err,user)=>{
     
        {
            const product=new Product({
                name,brand,dec,price,stock,image
            })
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"Product added successfully"})
                }
            })
        }
    })



    })





    const userSchema = new Mongoose.Schema({
        name:String,
        email:String,
        phonenumber:Number,
        password:String
    })
    const User = new Mongoose.model("User",userSchema)

    app.get("/userlist",(req,res)=>{

        User.find({},function(err,users){
            if(err){
               res.send(err)
            }else{
             res.send(users)
             console.log(users)
            }
        })
    })




const PORT=process.env.PORT||5000

app.listen(PORT,console.log(`server started on PORT ${PORT}`));
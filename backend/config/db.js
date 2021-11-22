import Mongoose from 'mongoose'
const connectDb = async()=>{
    try{
        const conn=await Mongoose.connect(process.env.MONGO_URI)
            // useNewUrlparser:true,
            // useUnifiedToplogy:true
        //connection link
        console.log(`mongodb is connected at ${conn.connection.host}`);
    } catch(error){
        console.log(`error:${error.message}`)
        process.exit(1)//error varumbo exit cheyan
    } 
}



export default connectDb

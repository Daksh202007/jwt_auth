import mongoose from "mongoose";
import config from "./config.js";
import dns from "dns";

async function connectDB(){
    // Force Node.js to use Google's DNS to bypass local network DNS SRV issues
    dns.setServers(['8.8.8.8', '8.8.4.4']);

    await mongoose.connect(config.MONGO_URI)
   
    .then(()=>{

        console.log("connected to DB")
    })
    
}
export default connectDB
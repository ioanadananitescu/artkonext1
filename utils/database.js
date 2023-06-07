import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async()=> {
  /*   mongoose.set('strictQuery', true); */

    if(isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    
        await mongoose.connect(process.env.MONGODB_URI, {
            dbname: "NewDatabase",
            useNewUrlParser: true,
            useUnifiedTopology: true, 
            
        }
        ),
        isConnected=true;
            console.log('MongoDb Connected')
            
    
    
        
            
    }



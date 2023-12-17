import colors from 'colors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


// configetation of env
dotenv.config();

const dbConnection =  () => {

    try {
        
    mongoose.connect(process.env.live_db)
    
    } catch (err) {
        
    }
}

export default dbConnection;


require('dotenv').config();
const mongoose= require('mongoose')



async function connectdb() {
    try{
    const dbURI = process.env.MONGO_URI;
    await mongoose.connect(dbURI)
    console.log('Database is connected')
    }
    catch(err)
    {
        console.log(err)
    }
}


module.exports={connectdb}
const mongoose = require("mongoose"); 

const dbConnect = ()=>{
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err, res)=> {
        if (!err){
            console.log(' YEI SI CONECTO')
        }else{
            console.log(' OH NO, INTENTALO LUEGO')
        }
    }
    );
};

module.exports = dbConnect;
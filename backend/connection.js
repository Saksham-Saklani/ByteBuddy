const mongoose = require("mongoose")

function connectDB(url){
    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("mongoDB connected"))
}

module.exports = {
    connectDB
}
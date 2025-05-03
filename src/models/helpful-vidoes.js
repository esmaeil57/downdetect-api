const { string } = require("zod");
const mongoose = require("../configration/db-config");

const helpfulVideosSchema = new mongoose.Schema({
    title:{type:String , required:true} ,
    description:{type:String , required: true} ,
    url:{type:String, required: true} ,
    thumbnail:{type:String  ,} ,
});

module.exports = new mongoose.model("HelpfulVideos", helpfulVideosSchema);
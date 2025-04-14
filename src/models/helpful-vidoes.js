const mongoose = require("../configration/db-config");

const helpfulVideosSchema = new mongoose.Schema({

});

module.exports = new mongoose.model("HelpfulVideos", helpfulVideosSchema);
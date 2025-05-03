const HelpfulVideo = require('../models/helpful-vidoes') ;

const createVideo = async (data) => await HelpfulVideo.create(data);
const getAllVideos = async () => await HelpfulVideo.find();
const getVideoById = async (id) => await HelpfulVideo.findById(id);
const updateVideo = async (id, data) => await HelpfulVideo.findByIdAndUpdate(id, data, { new: true });
const deleteVideo = async (id) => await HelpfulVideo.findByIdAndDelete(id);

module.exports = {createVideo,getAllVideos,getVideoById,updateVideo,deleteVideo};
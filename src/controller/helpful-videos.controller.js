const videoService = require("../services/helpful-videos.service");
const { helpfulVideoSchema} = require("../validators/helpful-videos.validators");

exports.createVideo = async (req, res) => {
  try {
    const data = helpfulVideoSchema.parse(req.body);
    const video = await videoService.createVideo(data);
    res.status(201).json(video);
  } catch (err) {
    res.status(400).json({ error: err.errors || err.message });
  }
};

exports.getAllVideos = async (req, res) => {
  const videos = await videoService.getAllVideos();
  res.json(videos);
};

exports.getVideoById = async (req, res) => {
  const video = await videoService.getVideoById(req.params.id);
  if (!video) return res.status(404).json({ message: "Video not found" });
  res.json(video);
};

exports.updateVideo = async (req, res) => {
  try {
    const data = helpfulVideoSchema.parse(req.body);
    const updated = await videoService.updateVideo(req.params.id, data);
    if (!updated) return res.status(404).json({ message: "Video not found" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.errors || err.message });
  }
};

exports.deleteVideo = async (req, res) => {
  const deleted = await videoService.deleteVideo(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Video not found" });
  res.json({ message: "Video deleted" });
};

const express = require("express");
const app = express();
require("dotenv").config();

const { YOUTUBE_VIDEO_API, YOUTUBE_SUGGESTION_API } = require("./constants");

const cors = require("cors");
const axios = require("axios");

app.use(
  cors({
    origin: "http://localhost:3000/",
  })
);

app.get("/home", async (req, res) => {
  try {
    const response = await axios.get(YOUTUBE_VIDEO_API);
    res.json({
      message: "success",
      data: response.data,
    });
  } catch (err) {
    res.status(400).json({ ERROR: err.message });
  }
});

app.get("/suggestion", async (req, res) => {
  try {
    const query = req.query.q;

    const response = await axios.get(YOUTUBE_SUGGESTION_API + query);
    res.json({
      message: "success",
      data: response.data,
    });
  } catch (err) {
    res.status(400).json({ ERROR: err.message });
  }
});

app.get("/chImage", async (req, res) => {
  try {
    const Id = req.query.id;
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${Id}&key=${process.env.API_NEW}`
    );

    res.json({
      message: "success",
      data: response?.data?.items[0]?.snippet?.thumbnails?.high?.url,
    });
  } catch (err) {
    res.status(400).json({ ERROR: err.message });
  }
});

app.get("/category", async (req, res) => {
  try {
    const query = req.query.q;
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&type=video&key=${process.env.API_NEW}`
    );

    res.json({
      message: "success",
      data: response?.data,
    });
  } catch (err) {
    res.status(400).json({ ERROR: err.message });
  }
});

app.get("/video", async (req, res) => {
  try {
    const videoId = req.query.id;
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.API_NEW}`
    );

    res.json({
      message: "success",
      data: response?.data,
    });
  } catch (err) {
    res.status(400).json({ ERROR: err.message });
  }
});

app.listen(8888, () => {
  console.log("Server is running on http://localhost:8888");
});

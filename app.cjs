const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const TrendingAnime = require("./models/Card.cjs");
const TopAnime = require("./models/TopAnime.cjs");
const cors = require("cors");
const User = require("./models/User.cjs");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/animehub");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/api/trending", async (req, res) => {
  try {
    const trendingAnime = await TrendingAnime.find();
    res.json(trendingAnime);
  } catch (error) {
    console.error("Error fetching trending anime:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/trending", async (req, res) => {
  const { image, title, description, rating } = req.body;
  try {
    const newTrendingAnime = new TrendingAnime({
      image,
      title,
      description,
      rating,
    });
    await newTrendingAnime.save();
    res.json(newTrendingAnime);
  } catch (error) {
    console.error("Error adding trending anime:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/topanime", async (req, res) => {
  try {
    const topAnime = await TopAnime.find();
    res.json(topAnime);
  } catch (error) {
    console.error("Error fetching Top anime:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/topanime", async (req, res) => {
  const { image, title, description, rating, genre } = req.body;
  try {
    const newTopAnime = new TopAnime({
      image,
      title,
      description,
      rating,
      genre,
    });
    await newTopAnime.save();
    res.json(newTopAnime);
  } catch (error) {
    console.error("Error adding top anime:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      res.json({
        success: true,
        message: "Login Succesful",
        username: user.username,
      });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.post("/api/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existinguser = await User.findOne({ email });
    if (existinguser) {
      res.status(400).json({
        success: false,
        message: "User with this email alredy exists",
      });
    } else {
      const newUser = new User({ username, email, password });
      await newUser.save();
      res.json({ success: true, message: "Signup successful" });
    }
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});

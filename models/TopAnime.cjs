const mongoose = require("mongoose");

const topAnimeSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  rating: Number,
  genre: Array,
});

const TopAnime = mongoose.model("TopAnime", topAnimeSchema);

module.exports = TopAnime;

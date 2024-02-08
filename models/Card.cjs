const mongoose = require("mongoose");

const trendingAnimeSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  rating: Number,
});

const TrendingAnime = mongoose.model("TrendingAnime", trendingAnimeSchema);

module.exports = TrendingAnime;

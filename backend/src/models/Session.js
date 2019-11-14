const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const SessionSchema = new mongoose.Schema({
  movie: String,
  overview: String,
  crew: String,
  genres: String,
  duration: Number,
  certification: Number,
  day: String,
  hour: String
});

SessionSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Session", SessionSchema);

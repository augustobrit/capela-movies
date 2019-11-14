const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const SessionSchema = new mongoose.Schema({
  movie: String,
  desc: String,
  day: String,
  hour: String
});

SessionSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Session", SessionSchema);

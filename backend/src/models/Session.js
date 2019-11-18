const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const SessionSchema = new mongoose.Schema(
  {
    thumbnail: String,
    movie: String,
    overview: String,
    crew: String,
    genres: String,
    duration: Number,
    certification: Number,
    day: String,
    hour: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

SessionSchema.virtual("thumbnail_url").get(function() {
  return `http://localhost:3001/files/${this.thumbnail}`;
});

SessionSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Session", SessionSchema);

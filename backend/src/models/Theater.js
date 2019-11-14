const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const TheaterSchema = new mongoose.Schema({
  name: String,
  city: String,
  session: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Session"
  }
});

TheaterSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Theater", TheaterSchema);

const Theater = require("../models/Theater");
const Session = require("../models/Session");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const theaters = await Theater.paginate({}, { page, limit: 10 });

    return res.json(theaters);
  },

  async show(req, res) {
    const theater = await Theater.findById(req.params.id);

    return res.json(theater);
  },

  async store(req, res) {
    const { session_id } = req.params;
    const { name, city } = req.body;

    const theater = await Theater.create({
      session: session_id,
      name,
      city
    });

    await theater.populate("session").execPopulate();

    return res.json(theater);
  }
};

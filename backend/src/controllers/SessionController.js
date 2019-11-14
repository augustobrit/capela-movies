const Session = require("../models/Session");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const sessions = await Session.paginate({}, { page, limit: 10 });

    return res.json(sessions);
  },

  async show(req, res) {
    const session = await Session.findById(req.params.id);

    return res.json(session);
  },

  async store(req, res) {
    const { movie, desc, day, hour } = req.body;

    const session = await Session.create({
      movie,
      desc,
      day,
      hour
    });

    return res.json(session);
  }
};

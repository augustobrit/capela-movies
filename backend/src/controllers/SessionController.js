const Session = require("../models/Session");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const sessions = await Session.paginate({}, { page, limit: 10 });

    return res.json(sessions);
  },

  async show(req, res) {
    const { id } = req.params;
    const session = await Session.findById(id);

    return res.json(session);
  },

  async store(req, res) {
    const {
      movie,
      overview,
      crew,
      genres,
      duration,
      certification,
      day,
      hour
    } = req.body;

    const session = await Session.create({
      movie,
      overview,
      crew,
      genres,
      duration,
      certification,
      day,
      hour
    });

    return res.json(session);
  },

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;

    if (id) {
      await Session.updateOne({ _id: id }, { $set: body });
      const updated = await Session.findById(id);
      return res.status(202).send(updated);
    }

    return res.json(updated);
  },

  async destroy(req, res) {
    const { id } = req.params;
    await Session.deleteOne({ _id: id });

    return res.status(204).send("Session removed success!");
  }
};

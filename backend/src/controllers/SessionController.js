const Session = require("../models/Session");
const User = require("../models/User");

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
    const { filename } = req.file;

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

    const { user_id } = req.headers;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(400).json({ error: "User does not exists" });
    }

    const session = await Session.create({
      user: user_id,
      thumbnail: filename,
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

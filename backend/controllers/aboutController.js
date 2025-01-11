const About = require('../models/About');

const getAbout = async (req, res) => {
  try {
    const about = await About.find();
    res.json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAbout };

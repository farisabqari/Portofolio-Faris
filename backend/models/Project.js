const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Project', projectSchema);

const {Schema, model} = require('mongoose');
const Joi = require('joi');

const textSchema = Schema({
  aboutText: {
    type: String,
  },
  footerText: {
    type: String,
  },
}, { versionKey: false, timestamps: true });

const joiSchemaTexts = Joi.object({
  aboutText: Joi.string(),
  footerText: Joi.string(),
});

const Text = model('text', textSchema);

module.exports = { Text, joiSchemaTexts };
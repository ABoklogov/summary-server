const {Schema, model} = require('mongoose');
const Joi = require('joi');

const textSchema = Schema({
  aboutText: {
    ru: { 
      type: String,
      required: true
    },
    en: { 
      type: String,
      required: true
    },
  },
  footerText: {
    ru: { 
      type: String,
      required: true
    },
    en: { 
      type: String,
      required: true
    },
  },
}, { versionKey: false, timestamps: true });

const joiSchemaTexts = Joi.object({
  aboutText: {
    ru: Joi.string().required(),
    en: Joi.string().required(),
  },
  footerText: {
    ru: Joi.string().required(),
    en: Joi.string().required(),
  },
});

const Text = model('text', textSchema);

module.exports = { Text, joiSchemaTexts };
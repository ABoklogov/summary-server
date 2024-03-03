const {Schema, model} = require('mongoose');
const Joi = require('joi');

const linkSchema = Schema({
  linkClient: {
    type: String,
  },
  linkServer: {
    type: String,
  },
}, { versionKey: false, timestamps: true });

const joiSchemaLinks = Joi.object({
  linkClient: Joi.string(),
  linkServer: Joi.string(),
});

const Link = model('link', linkSchema);

module.exports = { Link, joiSchemaLinks };
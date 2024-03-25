const {Schema, model} = require('mongoose');
const Joi = require('joi');

const linkSchema = Schema({
  linkClient: {
    type: String,
    required: true
  },
  linkServer: {
    type: String,
    required: true
  },
}, { versionKey: false, timestamps: true });

const joiSchemaLinks = Joi.object({
  linkClient: Joi.string().required(),
  linkServer: Joi.string().required(),
});

const Link = model('link', linkSchema);

module.exports = { Link, joiSchemaLinks };
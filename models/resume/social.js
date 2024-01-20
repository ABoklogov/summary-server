const {Schema, model} = require('mongoose');
const Joi = require('joi');

const socialSchema = Schema({
  link: { 
    type: String,
    required: true
  },
  text: { 
    type: String,
    required: true
  },
  shortLink: { 
    type: String,
    required: true
  },
});

const joiSchemaSocial = Joi.object({
  link: Joi.string().required(),
  text: Joi.string().required(),
  shortLink: Joi.string().required(),
});

const Social = model('social', socialSchema);

module.exports = {
  Social, 
  joiSchemaSocial
};
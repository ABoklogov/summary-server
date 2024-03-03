const {Schema, model} = require('mongoose');
const Joi = require('joi');

const experienceSchema = Schema({
  position: {
    ru: {
      type: String,
      required: true
    },
    en: {
      type: String,
      required: true
    },
  },
  company: {
    ru: {
      type: String,
      required: true
    },
    en: {
      type: String,
      required: true
    },
  },
  responsibility: {
    ru: {
      type: String,
      required: true
    },
    en: {
      type: String,
      required: true
    },
  },
  start: {
    ru: {
      type: String,
      required: true
    },
    en: {
      type: String,
      required: true
    },
  },
  finish: {
    ru: {
      type: String,
      required: true
    },
    en: {
      type: String,
      required: true
    },
  },
  webSite: {
    type: String,
    default: ""
  },
}, { versionKey: false, timestamps: true });

const joiSchemaExperience = Joi.object({
  position: {
    ru: Joi.string().required(),
    en: Joi.string().required(),
  },
  company: {
    ru: Joi.string().required(),
    en: Joi.string().required(),
  },
  responsibility: {
    ru: Joi.string().required(),
    en: Joi.string().required(),
  },
  start: {
    ru: Joi.string().required(),
    en: Joi.string().required(),
  },
  finish: {
    ru: Joi.string().required(),
    en: Joi.string().required(),
  },
  webSite: Joi.string().allow('').default(""),
});

const Experience = model('experience', experienceSchema);

module.exports = {
  Experience, 
  joiSchemaExperience
};
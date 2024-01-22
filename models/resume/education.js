const {Schema, model} = require('mongoose');
const Joi = require('joi');

const educationSchema = Schema({
  institution: {
    ru: {
      type: String,
      required: true
    },
    en: {
      type: String,
      required: true
    },
  },
  speciality: {
    ru: {
      type: String,
      required: true
    },
    en: {
      type: String,
      required: true
    },
  }
}, { versionKey: false, timestamps: true });

const joiSchemaEducation = Joi.object({
  institution: {
    ru: Joi.string().required(),
    en: Joi.string().required(),
  },
  speciality: {
    ru: Joi.string().required(),
    en: Joi.string().required(),
  }
});

const Education = model('education', educationSchema);

module.exports = {
  Education, 
  joiSchemaEducation
};
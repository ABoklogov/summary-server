const {Schema, model} = require('mongoose');
const Joi = require('joi');

const phoneReg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

const contactSchema = Schema({
  city: {
    ru: { 
      type: String,
      required: true
    },
    en: { 
      type: String,
      required: true
    },
  },
  email: {
    link: { 
      type: String,
      required: true
    },
    text: { 
      type: String,
      required: true
    },
  },
  phone: {
    link: { 
      type: String,
      required: true,
    },
    text: { 
      type: String,
      required: true,
      match: phoneReg
    }
  },
  telegram: {
    link: { 
      type: String,
    },
    text: { 
      type: String,
    },
  }
}, { versionKey: false, timestamps: true });

const joiSchemaContacts = Joi.object({
  city: {
    ru: Joi.string().required(),
    en: Joi.string().required(),
  },
  email: {
    link: Joi.string().required(),
    text: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ru'] } })
      .required(),
  },
  phone: {
    link: Joi.string().required(),
    text: Joi.string().pattern(phoneReg).required(),
  },
  telegram: {
    link: Joi.string(),
    text: Joi.string(),
  }
});

const Contact = model('contact', contactSchema);

module.exports = { Contact, joiSchemaContacts };
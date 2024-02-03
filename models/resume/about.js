const {Schema, model} = require('mongoose');
const Joi = require('joi');

const aboutSchema = Schema({
  name: {
    ru: {
      name: {
        type: String,
        required: true
      },
      profession: {
        type: String,
        required: true
      },
      link: {
        type: String,
      }
    },
    en: {
      name: {
        type: String,
        required: true
      },
      profession: {
        type: String,
        required: true
      },
      link: {
        type: String,
      }
    },
  },
  about: {
    ru: {
      type: String,
      required: true
    },
    en: {
      type: String,
      required: true
    }
  },
  avatar: {
    type: String,
    default: ''
  },
}, { versionKey: false, timestamps: true });

const joiSchemaAbout = Joi.object({
  name: {
    ru: {
      name: Joi.string().required(),
      profession: Joi.string().required(),
      link: Joi.string().required(),
    },
    en: {
      name: Joi.string().required(),
      profession: Joi.string().required(),
      link: Joi.string().required(),
    }
  },
  about: {
    ru: Joi.string().required(),
    en: Joi.string().required(),
  },
  avatar: Joi.string().allow("").default("")
});

const About = model('about', aboutSchema);

module.exports = { About, joiSchemaAbout };
const {Schema, model} = require('mongoose');
const Joi = require('joi');

const projectSchema = Schema({
  name: {
    ru: {
      type: String,
      required: true
    },
    en: {
      type: String,
      required: true
    }
  },
  link: {
    text: {
      ru: {
        type: String,
        required: true
      },
      en: {
        type: String,
        required: true
      }
    },
    url: {
      type: String,
      required: true
    }
  },
  preText: {
    ru: {
      type: String,
      required: true
    },
    en: {
      type: String,
      required: true
    }
  },
  tehnology: {
    type: [String]
  },
  linkFiles: {
    text: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }, 
  },
  description: {
    ru: {
      type: String,
      required: true
    },
    en: {
      type: String,
      required: true
    }
  },
  picture: {
    type: String,
    default: ''
  },
  backgroundColor: {
    type: String,
    required: true
  },
}, { versionKey: false, timestamps: true });

const joiSchemaProject = Joi.object({
  name: {
    ru: Joi.string().required(),
    en: Joi.string().required(),
  },
  link: {
    text: {
      ru: Joi.string().required(),
      en: Joi.string().required(),
    },
    url: Joi.string().required(),
  },
  preText: {
    ru: Joi.string().required(),
    en: Joi.string().required(),
  },
  tehnology: Joi.array().items(Joi.string().required()),
  linkFiles: {
    text: Joi.string().required(),
    url: Joi.string().required(),
  },
  description: {
    ru: Joi.string().required(),
    en: Joi.string().required(),
  },
  picture: Joi.string().allow('').default(''),
  backgroundColor: Joi.string().required(),
});

const Project = model('project', projectSchema);

module.exports = { Project, joiSchemaProject };
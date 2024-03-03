const {Schema, model} = require('mongoose');
const Joi = require('joi');

const techSkillSchema = Schema({
  value: { 
    type: String,
    required: true
  },
}, { versionKey: false, timestamps: true });

const joiSchemaTechSkill = Joi.object({
  value: Joi.string().required(),
});

const TechSkill = model('tech_skill', techSkillSchema);

module.exports = {
  TechSkill, 
  joiSchemaTechSkill
};
const { Schema, model } = require('mongoose');
const Joi = require('joi');

const userSchema = Schema({
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
  },
  login: {
    type: String,
    required: [true, 'login is required'],
    unique: true,
  },
  token: {
    type: String,
    default: null,
  },
}, { versionKey: false, timestamps: true })

const joiUserSchema = Joi.object({
  password: Joi.string().min(6).required(),
  login: Joi.string().required(),
  token: Joi.string().default(null)
});

const User = model('user', userSchema);

module.exports = {
  User,
  joiUserSchema
}
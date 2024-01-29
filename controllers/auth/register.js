const { User } = require('../../models/user');
const bcrypt = require('bcryptjs');
const { Conflict } = require('http-errors');
const { MY_PASSWORD, LOGIN } = process.env;

const register = async (req, res, next) => {
  const { login, password } = req.body;

  // проверка, чтобы никто не регался
  if (MY_PASSWORD !== password || LOGIN !== login) {
    throw new Conflict('You are not eligible to register');
  };

  const user = await User.findOne({ login });
  // проверяем есть ли юзер
  if (user) {
    throw new Conflict('Already register');
  };

  const { SALT } = process.env;
  // хешируем пароль
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(Number(SALT)));
  // создаем юзера в базе
  const result = await User.create({ login, password: hashPassword });

  res.status(201).json({
    status: 'created',
    code: 201,
    data: {
      user: {
        login
      }
    },
    message: 'Success register'
  });
};

module.exports = register;
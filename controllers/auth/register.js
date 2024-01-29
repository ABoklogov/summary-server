const { User } = require('../../models/user');
const bcrypt = require('bcryptjs');

const register = async (req, res, next) => {
  const { login, password } = req.body;
  const user = await User.findOne({ login });
  // проверяем есть ли юзер
  if (user) {
    return res.status(409).json({
      status: 'error',
      code: 409,
      message: 'Already register'
    });
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
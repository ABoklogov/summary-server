const bcrypt = require('bcryptjs');
const { User } = require('../../models/user');
const { Unauthorized } = require('http-errors');
const creationToken = require('./creationToken');

const login = async (req, res) => {
  const { login, password } = req.body;
  const user = await User.findOne({ login });

  // если юзера не существует в базе, генерируем ошибку
  if (!user) {
    throw new Unauthorized("Login or password is wrong");
  };

  const hashPassword = user.password;
  const compareResult = bcrypt.compareSync(password, hashPassword);

  // если пароль не верный, генерируем ошибку
  if (!compareResult) {
    throw new Unauthorized("Login or password is wrong");
  };

  // создаем токен
  const token = creationToken(user);
  // обновляем токен юзера в базе
  await User.findByIdAndUpdate(user._id, { token });

  res.status(200).json({
    status: 'ok',
    code: 200,
    data: {
      token,
      user: {
        login
      }
    }
  });
};

module.exports = login;
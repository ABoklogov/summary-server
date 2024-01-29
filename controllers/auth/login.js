const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../../models/user');

const login = async (req, res) => {
  const { login, password } = req.body;
  const user = await User.findOne({ login });

  const responseError = () => {
    return res.status(401).json({
      status: 'unauthorized',
      code: 401,
      message: 'Login or password is wrong'
    })
  };

  // есди юзера не существует в базе, генерируем ошибку
  if (!user) {
    responseError();
  };

  const hashPassword = user.password;
  const compareResult = bcrypt.compareSync(password, hashPassword);

  // если пароль не верный, генерируем ошибку
  if (!compareResult) {
    responseError();
  };

  const payload = {
    id: user._id
  };

  const { SECRET_KEY } = process.env;
  // создаем токен
  const token = jwt.sign(payload, SECRET_KEY);
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
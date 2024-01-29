const jwt = require('jsonwebtoken');
const { User } = require('../models/user');
const { Unauthorized } = require('http-errors');
const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  try {
    const [bearer, token] = req.headers.authorization.split(' ');

    if (bearer !== 'Bearer') {
      throw new Unauthorized('Not authorized');
    };

    // распознаем токен из запроса (достаем Id)
    const { id } = jwt.verify(token, SECRET_KEY);
    // находим юзера по id
    const user = await User.findById(id);
    // проверяем залогинен ли юзер
    const tokenValidity = await User.findOne({ token });
    // если юзера нет или юзер не залогинен, генерируем ошибку
    if (!user || !tokenValidity) {
      throw new Unauthorized('Not authorized');
    };

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({
      status: 'unauthorized',
      code: 401,
      message: error.message
    });
  };
};

module.exports = authenticate;
const { User } = require('../../models/user');

const register = async (req, res, next) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ login });

    if (user) {
      return res.status(409).json({
        status: 'error',
        code: 409,
        message: 'Already register'
      });
    };

    const result = await User.create({ login, password });

    res.status(201).json({
      status: 'created',
      code: 201,
      data: {
        // token,
        login
      },
      message: 'Success register'
    });
  } catch (error) {
    next(error)
  };
};

module.exports = register;
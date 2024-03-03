const { User } = require('../../models/user');

const current = async (req, res) => {
  const user = await User.findOne(req.headers.token);
  const { login } = user;

  res.status(200).json({
    status: 'ok',
    code: 200,
    data: {
      login
    }
  });
};

module.exports = current;
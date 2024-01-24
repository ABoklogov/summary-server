const { Social } = require('../../../models/resume');

const add = async (req, res) => {
  const newSocial = req.body;

  const result = await Social.create(newSocial);

  if (!result) {
    throw new Error('Server Error!');
  };

  res.status(201).json({
    status: 'created',
    code: 201,
    data: {
      result
    },
    message: 'Social created'
  });
};

module.exports = add;

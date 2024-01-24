const { Education } = require('../../../models/resume');

const add = async (req, res) => {
  const newEducation = req.body;

  const result = await Education.create(newEducation);

  if (!result) {
    throw new Error('Server Error!');
  };

  res.status(201).json({
    status: 'created',
    code: 201,
    data: {
      result
    },
    message: 'Education created'
  });
};

module.exports = add;

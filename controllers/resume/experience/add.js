const { Experience } = require('../../../models/resume');

const add = async (req, res) => {
  const newExperience = req.body;

  const result = await Experience.create(newExperience);

  if (!result) {
    throw new Error('Server Error!');
  };

  res.status(201).json({
    status: 'created',
    code: 201,
    data: {
      result
    },
    message: 'Experience created'
  });
};

module.exports = add;

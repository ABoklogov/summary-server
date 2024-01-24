const { TechSkill } = require('../../../models/resume');

const add = async (req, res) => {
  const newTechSkill = req.body;

  const result = await TechSkill.create(newTechSkill);

  if (!result) {
    throw new Error('Server Error!');
  };

  res.status(201).json({
    status: 'created',
    code: 201,
    data: {
      result
    },
    message: 'Tech skill created'
  });
};

module.exports = add;

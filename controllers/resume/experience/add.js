const { Experience } = require('../../../models/resume');

const add = async (req, res) => {
  const newExperience = req.body;

  try {
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
  } catch (error) {
    res.status(400).json({
      status: 'error',
      code: 400,
      data: null,
      message: error.message
    });
  };
};

module.exports = add;

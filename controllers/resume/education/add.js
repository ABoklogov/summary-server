const { Education } = require('../../../models/resume');

const add = async (req, res) => {
  const newEducation = req.body;

  try {
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

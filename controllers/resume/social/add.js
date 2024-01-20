const { Social } = require('../../../models/resume');

const add = async (req, res) => {
  const newSocial = req.body;

  try {
    const result = await Social.create(newSocial);
  
    if (!result) {
      throw new Error('Server Error!');
    };

    res.status(201).json({
      status: 'created',
      code: 201,
      data: {
        resault: result
      },
      message: 'Social created'
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

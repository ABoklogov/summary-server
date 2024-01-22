const { TechSkill } = require('../../../models/resume');

const removeById = async (req, res) => {
  const {id} = req.params;
  
  try {
    const resault = await TechSkill.findByIdAndDelete(id);
  
    resault
      ? res.status(200).json({
        status: 'success',
        code: 200,
        data: {
          resault
        },
        message: `Tech skill with id: ${id} deleted`
      })
      : res.status(404).json({
        status: 'error',
        code: 404,
        data: null,
        message: 'Not found'
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

module.exports = removeById;
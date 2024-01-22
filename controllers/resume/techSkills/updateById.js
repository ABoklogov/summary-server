const { TechSkill } = require('../../../models/resume');

const updateById = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedTechSkill = await TechSkill.findByIdAndUpdate(id, req.body, {new: true});
 
    updatedTechSkill
    ? res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        updatedTechSkill
      },
      message: `Tech skill with id: ${id} updated`
    })
    : res.status(404).json({
      status: 'error',
      code: 404,
      data: null,
      message: 'Not found'
    })
  } catch (error) {
    res.status(400).json({
      status: 'error',
      code: 400,
      data: null,
      message: error.message
    })
  };
};

module.exports = updateById;
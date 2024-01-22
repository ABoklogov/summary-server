const { Social } = require('../../../models/resume');

const updateById = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSocial = await Social.findByIdAndUpdate(id, req.body, {new: true});
 
    updatedSocial
    ? res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        updatedSocial
      },
      message: `Social with id: ${id} updated`
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
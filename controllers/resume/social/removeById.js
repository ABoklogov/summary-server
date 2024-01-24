const { Social } = require('../../../models/resume');

const removeById = async (req, res) => {
  const {id} = req.params;
  
  const result = await Social.findByIdAndDelete(id);

  result
    ? res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result
      },
      message: `Social with id: ${id} deleted`
    })
    : res.status(404).json({
      status: 'error',
      code: 404,
      data: null,
      message: 'Not found'
    });
};

module.exports = removeById;
const { Certificate } = require('../../../models/resume');

const updateById = async (req, res) => {
  const { id } = req.params;

  const result = await Certificate.findByIdAndUpdate(id, req.body, {new: true});

  result
  ? res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result
    },
    message: `Certificate with id: ${id} updated`
  })
  : res.status(404).json({
    status: 'error',
    code: 404,
    data: null,
    message: 'Not found'
  });
};

module.exports = updateById;
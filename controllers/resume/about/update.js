const { About } = require('../../../models/resume');

const update = async (req, res, next) => {
  const id = req.params.id;
  try {
    const result = await About.findByIdAndUpdate(id, req.body, {new: true});
 
    result
    ? res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result
      },
      message: 'Data updated'
    })
    : res.status(404).json({
      status: 'error',
      code: 404,
      data: null,
      message: 'Not found'
    })
  } catch (error) {
    // доделать ошибку схемы
    // next(error)
    res.status(400).json({
      status: 'error',
      code: 400,
      data: null,
      message: error.message
    })
  };
};

module.exports = update;
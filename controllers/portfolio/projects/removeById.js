const { Project } = require('../../../models/portfolio');
const { NotFound } = require('http-errors');

const removeById = async (req, res) => {
  const {id} = req.params;
  
  const result = await Project.findByIdAndDelete(id);

  if (result) {
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result
      },
      message: `Project with id: ${id} deleted`
    })
  } else {
    throw new NotFound('Not found');
  };
};

module.exports = removeById;
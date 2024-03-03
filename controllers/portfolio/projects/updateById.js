const { Project } = require('../../../models/portfolio');
const { NotFound } = require('http-errors');

const updateById = async (req, res) => {
  const { id } = req.params;
  const result = await Project.findByIdAndUpdate(id, req.body, {new: true});

  if (result) {
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result
      },
      message: `Project with id: ${id} updated`
    })
  } else {
    throw new NotFound('Not found');
  };
};

module.exports = updateById;
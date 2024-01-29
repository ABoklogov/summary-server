const { About } = require('../../../models/resume');
const { NotFound } = require('http-errors');

const updateName = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  
  const result = await About.findByIdAndUpdate(id, { name }, {new: true});

  if (result) {
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result
      },
      message: 'Name updated'
    })
  } else {
    throw new NotFound('Not found');
  };
};

module.exports = updateName;
const { About } = require('../../../models/resume');
const { NotFound } = require('http-errors');

const updateAbout = async (req, res) => {
  const { id } = req.params;
  const { about } = req.body;
 
  const result = await About.findByIdAndUpdate(id, { about }, {new: true});

  if (result) {
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result
      },
      message: 'About updated'
    })
  } else {
    throw new NotFound('Not found');
  }; 
};

module.exports = updateAbout;
const { About } = require('../../../models/resume');

const updateAbout = async (req, res) => {
  const { id } = req.params;
  const { about } = req.body;
 
  const result = await About.findByIdAndUpdate(id, { about }, {new: true});

  result
  ? res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result
    },
    message: 'About updated'
  })
  : res.status(404).json({
    status: 'error',
    code: 404,
    data: null,
    message: 'Not found'
  });
};

module.exports = updateAbout;
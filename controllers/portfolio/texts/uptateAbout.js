const { Text } = require('../../../models/portfolio');
const { NotFound } = require('http-errors');

const updateAbout = async (req, res) => {
  const { id } = req.params;
  const { aboutText } = req.body;
 
  const result = await Text.findByIdAndUpdate(id, { aboutText }, {new: true});

  if (result) {
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result
      },
      message: 'About text updated'
    })
  } else {
    throw new NotFound('Not found');
  }; 
};

module.exports = updateAbout;
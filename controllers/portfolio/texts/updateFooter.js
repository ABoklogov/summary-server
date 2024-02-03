const { Text } = require('../../../models/portfolio');
const { NotFound } = require('http-errors');

const updateFooter = async (req, res) => {
  const { id } = req.params;
  const { footerText } = req.body;
 
  const result = await Text.findByIdAndUpdate(id, { footerText }, {new: true});

  if (result) {
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result
      },
      message: 'Footer text updated'
    })
  } else {
    throw new NotFound('Not found');
  }; 
};

module.exports = updateFooter;
const { Link } = require('../../../models/portfolio');
const { NotFound } = require('http-errors');

const updateLinkServer = async (req, res) => {
  const { id } = req.params;
  const { linkServer } = req.body;
 
  const result = await Link.findByIdAndUpdate(id, { linkServer }, {new: true});

  if (result) {
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result
      },
      message: 'Link server updated'
    })
  } else {
    throw new NotFound('Not found');
  }; 
};

module.exports = updateLinkServer;
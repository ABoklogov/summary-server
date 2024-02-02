const { Link } = require('../../../models/portfolio');
const { NotFound } = require('http-errors');

const updateLinkClient = async (req, res) => {
  const { id } = req.params;
  const { linkClient } = req.body;
 
  const result = await Link.findByIdAndUpdate(id, { linkClient }, {new: true});

  if (result) {
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result
      },
      message: 'Link client updated'
    })
  } else {
    throw new NotFound('Not found');
  }; 
};

module.exports = updateLinkClient;
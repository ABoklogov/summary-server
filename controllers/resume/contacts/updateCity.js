const { Contact } = require('../../../models/resume');
const { NotFound } = require('http-errors');

const updateCity = async (req, res) => {
  const {id} = req.params;
  const {city} = req.body;

  const result = await Contact.findByIdAndUpdate(id, {city}, {new: true});

  if (result) {
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result
      },
      message: 'City updated'
    })
  } else {
    throw new NotFound('Not found');
  };
};

module.exports = updateCity;
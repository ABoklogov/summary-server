const { Contact } = require('../../../models/resume');

const updateCity = async (req, res) => {
  const {id} = req.params;
  const {city} = req.body;

  const result = await Contact.findByIdAndUpdate(id, {city}, {new: true});

  result
  ? res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result
    },
    message: 'City updated'
  })
  : res.status(404).json({
    status: 'error',
    code: 404,
    data: null,
    message: 'Not found'
  });
};

module.exports = updateCity;
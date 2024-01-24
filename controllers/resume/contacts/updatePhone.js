const { Contact } = require('../../../models/resume');

const updatePhone = async (req, res) => {
  const {id} = req.params;
  const {phone} = req.body;

  const result = await Contact.findByIdAndUpdate(id, {phone}, {new: true});

  result
  ? res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result
    },
    message: 'Phone updated'
  })
  : res.status(404).json({
    status: 'error',
    code: 404,
    data: null,
    message: 'Not found'
  });
};

module.exports = updatePhone;
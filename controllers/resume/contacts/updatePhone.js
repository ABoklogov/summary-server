const { Contact } = require('../../../models/resume');
const { NotFound } = require('http-errors');

const updatePhone = async (req, res) => {
  const {id} = req.params;
  const {phone} = req.body;

  const result = await Contact.findByIdAndUpdate(id, {phone}, {new: true});

  if (result) {
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result
      },
      message: 'Phone updated'
    })
  } else {
    throw new NotFound('Not found');
  };
};

module.exports = updatePhone;
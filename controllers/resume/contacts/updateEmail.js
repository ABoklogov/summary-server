const { Contact } = require('../../../models/resume');
const { NotFound } = require('http-errors');

const updateEmail = async (req, res) => {
  const {id} = req.params;
  const {email} = req.body;

  const result = await Contact.findByIdAndUpdate(id, {email}, {new: true});

  if (result) {
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result
      },
      message: 'Email updated'
    })
  } else {
    throw new NotFound('Not found');
  };
};

module.exports = updateEmail;
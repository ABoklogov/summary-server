const { Contact } = require('../../../models/resume');
const { NotFound } = require('http-errors');

const updateTelegram = async (req, res) => {
  const {id} = req.params;
  const {telegram} = req.body;

  const result = await Contact.findByIdAndUpdate(id, {telegram}, {new: true});

  if (result) {
    res.status(200).json({
      status: 'success',
      code: 200,
      data: {
        result
      },
      message: 'Telegram updated'
    })
  } else {
    throw new NotFound('Not found');
  };
};

module.exports = updateTelegram;
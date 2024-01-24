const { Contact } = require('../../../models/resume');

const updateTelegram = async (req, res) => {
  const {id} = req.params;
  const {telegram} = req.body;

  const result = await Contact.findByIdAndUpdate(id, {telegram}, {new: true});

  result
  ? res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      result
    },
    message: 'Telegram updated'
  })
  : res.status(404).json({
    status: 'error',
    code: 404,
    data: null,
    message: 'Not found'
  });
};

module.exports = updateTelegram;
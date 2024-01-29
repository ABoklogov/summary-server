const { Certificate } = require('../../../models/resume');

const add = async (req, res) => {
  const newCertificate = req.body;

  const result = await Certificate.create(newCertificate);

  if (!result) {
    throw new Error('Server Error!');
  };

  res.status(201).json({
    status: 'created',
    code: 201,
    data: {
      result
    },
    message: 'Certificate created'
  });
};

module.exports = add;

const { Certificate } = require('../../../models/resume');
const path = require('path');
const fs = require('fs/promises');
const { InternalServerError } = require('http-errors');

const certificatesDir = path.join(__dirname, '../../../', 'public/certificates');

const add = async (req, res) => {
  const newCertificate = req.body;

  const result = await Certificate.create(newCertificate);
  if (!result) {
    throw new InternalServerError('Server Error!');
  };

  const dirPath = path.join(certificatesDir, result._id.toString());
  await fs.mkdir(dirPath) // создаем папку для сертификатов в public/certificates/....

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

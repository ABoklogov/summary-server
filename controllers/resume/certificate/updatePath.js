const fs = require('fs/promises');
const path = require('path');
const { NotFound } = require('http-errors');
const extensionList = require('../../extensionList');
const { Certificate } = require('../../../models/resume');

const certificateDir = path.join(__dirname, '../../../', 'public/certificates');

const updatePath = async (req, res) => {
  const { id } = req.params;
  const { path: tmpPath, originalname } = req.file;

  try {
    const [extension] = originalname.split('.').reverse() // проверяем формат пришедшего файла

    if (!extensionList.includes(extension)) {
      await fs.unlink(tmpPath);
      return res.status(415).json({
        status: 'error',
        code: 415,
        message: 'File format not supported'
      });
    };

    const uploadPath = path.join(certificateDir, id, originalname);
    
    await fs.rename(tmpPath, uploadPath); // перемещаем файл из временной папки temp в папку для сертификатов public/certificates/...
    const certificatePath = `/certificates/${id}/${originalname}`;

    const isUpdateCertificate = await Certificate.findByIdAndUpdate(id, { path: certificatePath });

    if (isUpdateCertificate) {
      res.status(200).json({
        status: 'ok',
        code: 200,
        data: {
          path: certificatePath
        }
      });
    } else {
      throw new NotFound('Not found');
    };
  } catch (error) {
    await fs.unlink(tmpPath);
    throw error
  };
};

module.exports = updatePath;
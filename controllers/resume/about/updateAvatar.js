const fs = require('fs/promises');
const path = require('path');
const { NotFound } = require('http-errors');
const extensionList = require('../../extensionList');
const { About } = require('../../../models/resume');

const avatarDir = path.join(__dirname, '../../../', 'public/avatars');

const updateAvatar = async (req, res) => {
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

    const uploadPath = path.join(avatarDir, originalname);
    
    await fs.rename(tmpPath, uploadPath); // перемещаем аватарку из временной папки temp в папку для аватарки юзера public/avatars/idUser
    const avatar = `/avatars/${originalname}`;

    const isUpdateAvatar = await About.findByIdAndUpdate(id, { avatar });

    if (isUpdateAvatar) {
      res.status(200).json({
        status: 'ok',
        code: 200,
        data: {
          avatar
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

module.exports = updateAvatar;
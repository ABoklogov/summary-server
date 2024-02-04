const fs = require('fs/promises');
const path = require('path');
const { NotFound } = require('http-errors');
const extensionList = require('../../extensionList');
const { Project } = require('../../../models/portfolio');

const projectImagesDir = path.join(__dirname, '../../../', 'public/projectImages');

const updatePicture = async (req, res) => {
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
    const uploadPath = path.join(projectImagesDir, id, originalname);
    
    await fs.rename(tmpPath, uploadPath); // перемещаем файл из временной папки temp в папку для проектов public/projectImages/...
    const projectsPath = `/projectImages/${id}/${originalname}`;
    
    const isUpdateProject = await Project.findByIdAndUpdate(id, { picture: projectsPath });

    if (isUpdateProject) {
      res.status(200).json({
        status: 'ok',
        code: 200,
        data: {
          picture: projectsPath
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

module.exports = updatePicture;
const fs = require('fs/promises');
const path = require('path');
const { Project } = require('../../../models/portfolio');
const { InternalServerError } = require('http-errors');

const projectsPictureDir = path.join(__dirname, '../../../', 'public/projectImages');

const add = async (req, res) => {
  const newProject = req.body;

  const result = await Project.create(newProject);

  if (!result) {
    throw new InternalServerError('Server Error!');
  };

  const id = result._id.toString();
  const dirPath = path.join(projectsPictureDir, id);
  await fs.mkdir(dirPath) // создаем папку для картинок в public/projectImages/....

  res.status(201).json({
    status: 'created',
    code: 201,
    data: {
      result
    },
    message: 'Project created'
  });
};

module.exports = add;

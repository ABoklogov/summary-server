const fs = require('fs/promises');
const path = require('path');
const extensionList = require('../../extensionList');
const { Project } = require('../../../models/portfolio');
const { InternalServerError } = require('http-errors');

const prpjectsPictureDir = path.join(__dirname, '../../../', 'public/projectImages');

const add = async (req, res) => {
  const newProject = req.body;

  const result = await Project.create(newProject);

  if (!result) {
    throw new InternalServerError('Server Error!');
  };

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

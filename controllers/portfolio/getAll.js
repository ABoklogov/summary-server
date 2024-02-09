const { 
  Link, 
  Project, 
  Text
 } = require('../../models/portfolio');
const { NotFound } = require('http-errors');

const getAll = async (req, res) => {
  const links = await Link.find({}, '_id linkClient linkServer');
  const texts = await Text.find({}, '_id aboutText footerText');
  const projects = await Project.find({}, '_id name link preText tehnology linkFiles description picture backgroundColor');

  if (links || projects || texts) {
    res.status(200).json({
      status: 'success',
        code: 200,
        data:  {
          links: links[0],
          texts: texts[0],
          projects,
        }
    });
  } else {
    throw new NotFound('Not found');
  };
};

module.exports = getAll;
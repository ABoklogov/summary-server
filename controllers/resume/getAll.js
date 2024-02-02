const { 
  About, 
  Contact, 
  Social, 
  Education, 
  TechSkill,
  Experience,
  Certificate
 } = require('../../models/resume');
const { NotFound } = require('http-errors');

const getAll = async (req, res) => {
  const about = await About.find({}, '_id name about avatar');
  const contacts = await Contact.find({}, '_id city email phone telegram');
  const social = await Social.find({}, '_id link text shortLink');
  const education = await Education.find({}, '_id institution speciality');
  const tech_skills = await TechSkill.find({}, '_id value');
  const experience = await Experience.find({}, '_id position company responsibility start finish webSite ');
  const certificate = await Certificate.find({}, '_id position company start finish webSite path');

  if (about || contacts || social || education || tech_skills || experience || certificate) {
    res.status(200).json({
      status: 'success',
        code: 200,
        data:  {
          about: about[0],
          contacts: contacts[0],
          social,
          social,
          education,
          tech_skills,
          experience,
          certificate
        }
    });
  } else {
    throw new NotFound('Not found');
  };
};

module.exports = getAll;
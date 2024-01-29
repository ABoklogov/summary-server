const express = require('express');
const router = express.Router();

const { validation, controllerWrapper } = require('../../middlewares')
const { resume: ctrl } = require('../../controllers/');
// console.log("🚀 ~ file: resume.js:5 ~ ctrl:", ctrl)
const { joiSchemaAbout } = require('../../models/resume/about');
const { joiSchemaContacts } = require('../../models/resume/contact');
const { joiSchemaSocial } = require('../../models/resume/social');
const { joiSchemaEducation } = require('../../models/resume/education');
const { joiSchemaTechSkill } = require('../../models/resume/techSkill');
const { joiSchemaExperience } = require('../../models/resume/experience');
const { joiSchemaCertificate } = require('../../models/resume/certificate');

const validationAbout = validation(joiSchemaAbout);
const validationContacts = validation(joiSchemaContacts);
const validationSocial = validation(joiSchemaSocial);
const validationEducation = validation(joiSchemaEducation);
const validationTechSkill = validation(joiSchemaTechSkill);
const validationExperience = validation(joiSchemaExperience);
const validationCertificate = validation(joiSchemaCertificate);

router.patch('/about/:id/name', validationAbout, controllerWrapper(ctrl.about.updateName));
router.patch('/about/:id/about', validationAbout, controllerWrapper(ctrl.about.updateAbout));

router.patch('/contacts/:id/city', validationContacts, controllerWrapper(ctrl.contacts.updateCity));
router.patch('/contacts/:id/email', validationContacts, controllerWrapper(ctrl.contacts.updateEmail));
router.patch('/contacts/:id/phone', validationContacts, controllerWrapper(ctrl.contacts.updatePhone));
router.patch('/contacts/:id/telegram', controllerWrapper(ctrl.contacts.updateTelegram));

router.post('/social', validationSocial, controllerWrapper(ctrl.social.add));
router.put('/social/:id', validationSocial, controllerWrapper(ctrl.social.updateById));
router.delete('/social/:id', controllerWrapper(ctrl.social.removeById));

router.post('/education', validationEducation, controllerWrapper(ctrl.education.add));
router.put('/education/:id', validationEducation, controllerWrapper(ctrl.education.updateById));
router.delete('/education/:id', controllerWrapper(ctrl.education.removeById));

router.post('/tech_skills', validationTechSkill, controllerWrapper(ctrl.techSkills.add));
router.put('/tech_skills/:id', validationTechSkill, controllerWrapper(ctrl.techSkills.updateById));
router.delete('/tech_skills/:id', controllerWrapper(ctrl.techSkills.removeById));

router.post('/experience', validationExperience, controllerWrapper(ctrl.experience.add));
router.put('/experience/:id', validationExperience, controllerWrapper(ctrl.experience.updateById));
router.delete('/experience/:id', controllerWrapper(ctrl.experience.removeById));

router.post('/certificate', validationCertificate, controllerWrapper(ctrl.certificate.add));
router.put('/certificate/:id', validationCertificate, controllerWrapper(ctrl.certificate.updateById));
router.delete('/certificate/:id', ctrl.certificate.removeById);

// router.get('/', ctrl.getAll);

module.exports = router;
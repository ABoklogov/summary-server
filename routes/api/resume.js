const express = require('express');
const router = express.Router();

const { validation } = require('../../middlewares')
const { resume: ctrl } = require('../../controllers/');
// console.log("🚀 ~ file: resume.js:5 ~ ctrl:", ctrl)
const { joiSchemaAbout } = require('../../models/resume/about');
const { joiSchemaContacts } = require('../../models/resume/contact');
const { joiSchemaSocial } = require('../../models/resume/social');
const { joiSchemaEducation } = require('../../models/resume/education');

const validationAbout = validation(joiSchemaAbout);
const validationContacts = validation(joiSchemaContacts);
const validationSocial= validation(joiSchemaSocial);
const validationEducation= validation(joiSchemaEducation);

router.patch('/about/:id/name', validationAbout, ctrl.about.updateName);
router.patch('/about/:id/about', validationAbout, ctrl.about.updateAbout);

router.patch('/contacts/:id/city', validationContacts, ctrl.contacts.updateCity);
router.patch('/contacts/:id/email', validationContacts, ctrl.contacts.updateEmail);
router.patch('/contacts/:id/phone', validationContacts, ctrl.contacts.updatePhone);
router.patch('/contacts/:id/telegram', ctrl.contacts.updateTelegram);

router.post('/social', validationSocial, ctrl.social.add);
router.put('/social/:id', validationSocial, ctrl.social.updateById);
router.delete('/social/:id', ctrl.social.removeById);

router.post('/education', validationEducation, ctrl.education.add);
router.put('/education/:id', validationEducation, ctrl.education.updateById);
router.delete('/education/:id', ctrl.education.removeById);

// router.post('/certificate', ctrl.certificate.add);
// router.delete('/certificate', ctrl.certificate.removeById);
// router.put('/certificate', ctrl.certificate.updateById);


// router.post('/experience', ctrl.experience.add);
// router.delete('/experience', ctrl.experience.removeById);
// router.put('/experience', ctrl.experience.updateById);


// router.post('/tech-skills', ctrl.techSkills.add);
// router.delete('/tech-skills', ctrl.techSkills.removeById);
// router.put('/tech-skills', ctrl.techSkills.updateById);

router.get('/', ctrl.getAll);

module.exports = router;
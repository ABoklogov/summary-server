const express = require('express');
const router = express.Router();

const { validation, controllerWrapper, authenticate, upload } = require('../../middlewares');
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

router.patch('/about/:id/name', authenticate, validationAbout, controllerWrapper(ctrl.about.updateName));
router.patch('/about/:id/about', authenticate, validationAbout, controllerWrapper(ctrl.about.updateAbout));
router.patch('/about/:id/avatars', authenticate, upload.single('avatar'), controllerWrapper(ctrl.about.updateAvatar));

router.patch('/contacts/:id/city', authenticate, validationContacts, controllerWrapper(ctrl.contacts.updateCity));
router.patch('/contacts/:id/email', authenticate, validationContacts, controllerWrapper(ctrl.contacts.updateEmail));
router.patch('/contacts/:id/phone', authenticate, validationContacts, controllerWrapper(ctrl.contacts.updatePhone));
router.patch('/contacts/:id/telegram', authenticate, controllerWrapper(ctrl.contacts.updateTelegram));

router.post('/social', authenticate, validationSocial, controllerWrapper(ctrl.social.add));
router.put('/social/:id', authenticate, validationSocial, controllerWrapper(ctrl.social.updateById));
router.delete('/social/:id', authenticate, controllerWrapper(ctrl.social.removeById));

router.post('/education', authenticate, validationEducation, controllerWrapper(ctrl.education.add));
router.put('/education/:id', authenticate, validationEducation, controllerWrapper(ctrl.education.updateById));
router.delete('/education/:id', authenticate, controllerWrapper(ctrl.education.removeById));

router.post('/tech_skills', authenticate, validationTechSkill, controllerWrapper(ctrl.techSkills.add));
router.put('/tech_skills/:id', authenticate, validationTechSkill, controllerWrapper(ctrl.techSkills.updateById));
router.delete('/tech_skills/:id', authenticate, controllerWrapper(ctrl.techSkills.removeById));

router.post('/experience', authenticate, validationExperience, controllerWrapper(ctrl.experience.add));
router.put('/experience/:id', authenticate, validationExperience, controllerWrapper(ctrl.experience.updateById));
router.delete('/experience/:id', authenticate, controllerWrapper(ctrl.experience.removeById));

router.post('/certificate', authenticate, validationCertificate, controllerWrapper(ctrl.certificate.add));
router.put('/certificate/:id', authenticate, validationCertificate, controllerWrapper(ctrl.certificate.updateById));
router.delete('/certificate/:id', authenticate, ctrl.certificate.removeById);
router.patch('/certificate/:id/path', authenticate, validationCertificate, upload.single('path'), controllerWrapper(ctrl.certificate.updatePath));

// router.get('/', ctrl.getAll);

module.exports = router;
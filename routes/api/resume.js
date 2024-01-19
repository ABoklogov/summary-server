const express = require('express');
const router = express.Router();

const { validation } = require('../../middlewares')
const { resume: ctrl } = require('../../controllers/');
const { joiSchemaAbout } = require('../../models/resume/about');
const { joiSchemaContacts } = require('../../models/resume/contact');

// console.log("🚀 ~ file: resume.js:5 ~ ctrl:", ctrl)
const validationAbout = validation(joiSchemaAbout);
const validationContacts = validation(joiSchemaContacts);

// изменяем либо объект name, либо about (но в этих объектах все поля должны быть заполнены)
router.patch('/about/:id', validationAbout, ctrl.about.update);
// изменяем либо объект name, либо about (но в этих объектах все поля должны быть заполнены)
router.patch('/contacts/:id', validationContacts, ctrl.contacts.update);

// router.post('/certificate', ctrl.certificate.add);
// router.delete('/certificate', ctrl.certificate.removeById);
// router.put('/certificate', ctrl.certificate.updateById);


// router.post('/education', ctrl.education.add);
// router.delete('/education', ctrl.education.removeById);
// router.put('/education', ctrl.education.updateById);

// router.post('/experience', ctrl.experience.add);
// router.delete('/experience', ctrl.experience.removeById);
// router.put('/experience', ctrl.experience.updateById);

// router.post('/social', ctrl.social.add);
// router.delete('/social', ctrl.social.removeById);
// router.put('/social', ctrl.social.updateById);

// router.post('/tech-skills', ctrl.techSkills.add);
// router.delete('/tech-skills', ctrl.techSkills.removeById);
// router.put('/tech-skills', ctrl.techSkills.updateById);

router.get('/', ctrl.getAll);

module.exports = router;
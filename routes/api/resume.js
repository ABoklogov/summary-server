const express = require('express');
const router = express.Router();

const { validation } = require('../../middlewares')
const { resume: ctrl } = require('../../controllers/');
const { joiSchemaAbout } = require('../../models/resume');

// console.log("🚀 ~ file: resume.js:5 ~ ctrl:", ctrl)
const validationAbout = validation(joiSchemaAbout);

// изменяем либо объект name, либо about (но в этих объектах все поля должны быть заполнены)
router.patch('/about/:id', validationAbout, ctrl.about.update);

// router.post('/about-name', ctrl.about.addName);
// router.delete('/about-name', ctrl.about.removeName);
// router.put('/about-name', ctrl.about.updateName);
// router.post('/about', ctrl.about.addAbout);
// router.delete('/about', ctrl.about.removeAbout);
// router.put('/about', ctrl.about.updateAbout);

// router.post('/certificate', ctrl.certificate.add);
// router.delete('/certificate', ctrl.certificate.removeById);
// router.put('/certificate', ctrl.certificate.updateById);

// router.post('/contacts/city', ctrl.contacts.addCity);
// router.post('/contacts/email', ctrl.contacts.addEmail);
// router.post('/contacts/phone', ctrl.contacts.addPhone);
// router.post('/contacts/telegram', ctrl.contacts.addTelegram);
// router.delete('/contacts/city', ctrl.contacts.removeCity);
// router.delete('/contacts/email', ctrl.contacts.removeEmail);
// router.delete('/contacts/phone', ctrl.contacts.removePhone);
// router.delete('/contacts/telegram', ctrl.contacts.removeTelegram);
// router.put('/contacts/city', ctrl.contacts.updateCity);
// router.put('/contacts/email', ctrl.contacts.updateEmail);
// router.put('/contacts/phone', ctrl.contacts.updatePhone);
// router.put('/contacts/telegram', ctrl.contacts.updateTelegram);

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
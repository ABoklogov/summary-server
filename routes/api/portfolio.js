const express = require('express');
const router = express.Router();

const { validation, controllerWrapper, authenticate, upload } = require('../../middlewares');
const { portfolio: ctrl } = require('../../controllers/');

const { joiSchemaLinks } = require('../../models/portfolio/link');
const { joiSchemaTexts } = require('../../models/portfolio/text');
const { joiSchemaProject } = require('../../models/portfolio/project');

const validationLinks = validation(joiSchemaLinks);
const validationTexts = validation(joiSchemaTexts);
const validationProject = validation(joiSchemaProject);

router.get('/', controllerWrapper(ctrl.getAll));

router.patch('/links/:id/client', authenticate, validationLinks, controllerWrapper(ctrl.links.updateLinkClient));
router.patch('/links/:id/server', authenticate, validationLinks, controllerWrapper(ctrl.links.updateLinkServer));

router.patch('/text/:id/about', authenticate, validationTexts, controllerWrapper(ctrl.texts.updateAbout));
router.patch('/text/:id/footer', authenticate, validationTexts, controllerWrapper(ctrl.texts.updateFooter));

router.post('/projects', authenticate, validationProject, controllerWrapper(ctrl.projects.add));
router.put('/projects/:id', authenticate, validationProject, controllerWrapper(ctrl.projects.updateById));
router.delete('/projects/:id', authenticate, validationProject, controllerWrapper(ctrl.projects.removeById));
router.patch('/projects/:id/picture', authenticate, upload.single('picture'), controllerWrapper(ctrl.projects.updatePicture));

module.exports = router;
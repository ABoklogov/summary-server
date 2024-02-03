const express = require('express');
const router = express.Router();

const { validation, controllerWrapper, authenticate, upload } = require('../../middlewares');
const { portfolio: ctrl } = require('../../controllers/');

const { joiSchemaLinks } = require('../../models/portfolio/link');
const { joiSchemaTexts } = require('../../models/portfolio/text');

const validationLinks = validation(joiSchemaLinks);
const validationTexts = validation(joiSchemaTexts);

// router.get('/', ctrl.getAll);

router.patch('/links/:id/client', authenticate, validationLinks, controllerWrapper(ctrl.links.updateLinkClient));
router.patch('/links/:id/server', authenticate, validationLinks, controllerWrapper(ctrl.links.updateLinkServer));

router.patch('/text/:id/about', authenticate, validationTexts, controllerWrapper(ctrl.texts.updateAbout));
router.patch('/text/:id/footer', authenticate, validationTexts, controllerWrapper(ctrl.texts.updateFooter));

// router.post('/projects', ctrl.projects.add);
// router.delete('/projects', ctrl.projects.removeById);
// router.put('/projects', ctrl.projects.updateById);


module.exports = router;
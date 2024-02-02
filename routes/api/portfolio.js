const express = require('express');
const router = express.Router();

const { validation, controllerWrapper, authenticate, upload } = require('../../middlewares');
const { portfolio: ctrl } = require('../../controllers/');

const { joiSchemaLinks } = require('../../models/portfolio/link');

const validationLinks = validation(joiSchemaLinks);

// router.get('/', ctrl.getAll);

router.patch('/links/:id/client', authenticate, validationLinks, controllerWrapper(ctrl.links.updateLinkClient));
router.patch('/links/:id/server', authenticate, validationLinks, controllerWrapper(ctrl.links.updateLinkServer));

// router.post('/projects', ctrl.projects.add);
// router.delete('/projects', ctrl.projects.removeById);
// router.put('/projects', ctrl.projects.updateById);

// router.put('/text-footer', ctrl.text.updateFooter);
// router.put('/text-about', ctrl.text.updateFooter);

module.exports = router;
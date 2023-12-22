const express = require('express');
const router = express.Router();

const { portfolio: ctrl } = require('../../controllers/');

router.get('/', ctrl.getAll);

// router.put('/link-client', ctrl.links.udateLinkClient);
// router.put('/link-server', ctrl.links.updateLinkServer);

// router.post('/projects', ctrl.projects.add);
// router.delete('/projects', ctrl.projects.removeById);
// router.put('/projects', ctrl.projects.updateById);

// router.put('/text-footer', ctrl.text.updateFooter);
// router.put('/text-about', ctrl.text.updateFooter);

module.exports = router;
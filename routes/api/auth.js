const express = require('express');
const router = express.Router();

const { joiUserSchema } = require('../../models/user');
const { validation, controllerWrapper, authenticate, limiter } = require('../../middlewares');

const { auth: ctrl } = require('../../controllers');

const userValidationMiddleware = validation(joiUserSchema);

router.post('/register', userValidationMiddleware, controllerWrapper(ctrl.register));
router.post('/login', limiter, userValidationMiddleware, controllerWrapper(ctrl.login));
router.get('/logout', authenticate, controllerWrapper(ctrl.logout));
// router.get('/current', authenticate, controllerWrapper(ctrl.current));
// router.patch('/', authenticate, controllerWrapper(ctrl.subscription));

module.exports = router;
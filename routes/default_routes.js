const router = require('express').Router();
const controller = require('../controller/default_controller');

router.get('/', controller.index);
router.get('/cat', controller.cat);
router.get('/recepies', controller.recepies);
router.get('/contact', controller.contact);

module.exports = router;

const router = require('express').Router();
const travellers = require('./travellers')
const locations = require('./locations')

router.use('/travellers', travellers)
router.use('/locations', locations)

module.exports = router;
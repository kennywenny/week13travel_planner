const router = require('express').Router();
const travellers = require('./travellers')
const locations = require('./locations')
const trips = require('./trips')

router.use('/travellers', travellers)
router.use('/locations', locations)
router.use('/trips', trips)

module.exports = router;
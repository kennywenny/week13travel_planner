const router = require('express').Router();
const travellers = require('./travellers')

router.use('/travellers', travellers)

module.exports = router;
const router = require('express').Router();

router.post('/', (req, res) => {
  res.json('WORKING')
})

module.exports = router;
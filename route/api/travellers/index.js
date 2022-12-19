const router = require('express').Router();
const Traveller = require('../../../model/traveller')

router.post('/', async (req, res) => {
  await Traveller.create(req.body)
  res.status(204).end()
})

module.exports = router;
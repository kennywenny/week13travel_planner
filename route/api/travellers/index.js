const router = require('express').Router();
const Traveller = require('../../../model/traveller')

router.get('/', async (_, res) => {
  const results = await Traveller.findAll()
  res.json(results)
})

router.post('/', async (req, res) => {
  await Traveller.create(req.body)
  res.status(204).end()
})

module.exports = router;
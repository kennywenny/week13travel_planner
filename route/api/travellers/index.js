const router = require('express').Router();
const Traveller = require('../../../model/traveller')

router.get('/:id', async (req, res) => {
  try {
    const result = await Traveller.findByPk(req.params.id)
    if (!result) {
      res.status(404).end()
    } else {
      res.json(result)
    }
  } catch (err) {
    res.status(500).end()
  }
})

router.get('/', async (_, res) => {
  const results = await Traveller.findAll()
  res.json(results)
})

router.post('/', async (req, res) => {
  await Traveller.create(req.body)
  res.status(204).end()
})

router.delete('/:id', async (req, res) => {
  await Traveller.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(204).end()
})

module.exports = router;
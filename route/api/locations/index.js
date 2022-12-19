const router = require('express').Router();
const Location = require('../../../model/location')

router.get('/:id', async (req, res) => {
  try {
    const result = await Location.findByPk(req.params.id)
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
  try {
    const results = await Location.findAll()
    res.json(results)
  } catch (err) {
    res.status(500).end()
  }
})

router.post('/', async (req, res) => {
  try {
    await Location.create(req.body)
    res.status(204).end()
  } catch (err) {
    res.status(500).end()
  }
})

router.delete('/:id', async (req, res) => {
  const result = await Location.destroy({
    where: {
      id: req.params.id
    }
  })
  if (result === 0) {
    res.status(404).end()
  } else {
    res.status(204).end()
  }
})

module.exports = router;
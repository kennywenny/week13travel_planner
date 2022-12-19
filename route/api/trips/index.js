const router = require('express').Router();
const Trip = require('../../../model/trip')

router.get('/:id', async (req, res) => {
  try {
    const result = await Trip.findByPk(req.params.id)
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
    const results = await Trip.findAll()
    res.json(results)
  } catch (err) {
    res.status(500).end()
  }
})

router.post('/', async (req, res) => {
  try {
    await Trip.create(req.body)
    res.status(204).end()
  } catch (err) {
    console.log(err)
    console.log(err.name)
    if (err.name === 'SequelizeForeignKeyConstraintError') {
      res.status(404).end()
    } else {
      res.status(500).end()
    }
  }
})

router.delete('/:id', async (req, res) => {
  const result = await Trip.destroy({
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
const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/iphones', require('./iphones'))
router.use('/androids', require('./androids'))
router.use('/retro', require('./retro'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

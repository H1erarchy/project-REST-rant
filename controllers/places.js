const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req,res) => {
  res.render ('places/index', { places })
})

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id] })
  }
})


router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places [id] })
  }
})


router.post('/', (req, res) => {  
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = '/images/jay-wennington-N_Y88TWmGwA-unsplash.jpg'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})


// GET /places
router.get('/places', (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/ralph-ravi-kayden-_6KWBeyFPeE-unsplash.jpg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/bobby-mc-leod-_XsJnWZHQHA-unsplash.jpg'
  }]
  
  res.render('places/index', { places })
})

module.exports = router
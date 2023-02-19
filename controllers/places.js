const router = require('express').Router()

router.get('/new', (req, res) => {
    res.render('places/new')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


// GET /places
app.get('/places', (req, res) => {
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
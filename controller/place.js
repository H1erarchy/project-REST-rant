const router = require (`express`).router()

// more code here in a moment

router.get(`/`, (req,res) =>(
    res.send (`GET/places`)
))


module.exports= router
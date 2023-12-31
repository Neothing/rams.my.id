const router = require("express").Router();
const ShortUrl = require('../database/models/shortUrl')

router.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('pages/rshorter', { shortUrls: shortUrls })
})

router.post('/shortUrls', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ full: req.body.fullUrl })
  if(shortUrl){
    console.log("data sudah ada")
  } else {
    await ShortUrl.create({ full: req.body.fullUrl })
  }

  res.redirect('/rs')
})

router.get('/:short', async (req, res) => {
  const short = await ShortUrl.findOne({ short: req.params.short })
  if (short == null) return res.render("pages/404");

  short.clicks++
  short.save()
  res.redirect(short.full)
})


module.exports = router;
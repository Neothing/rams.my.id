const router = require("express").Router();
const ShortUrl = require('../database/models/shortUrl');

router.get("/", async (req, res) => {
  res.status(200);
  res.render("pages/index");
});


module.exports = router;
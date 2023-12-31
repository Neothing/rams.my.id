const router = require("express").Router();

router.get("/", async (req, res) => {
  res.status(200);
  res.render("pages/buatnindy");
});

module.exports = router;
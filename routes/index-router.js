var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get('/currencies-example', (req, res, next) => {
  res.render('currencies-view');
});

module.exports = router;

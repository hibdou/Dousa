var express = require("express");
var router = express.Router();

/* GET home page. */

var express = require("express");
var router = express.Router();
/* GET home page. */
router.get("/", function (req, res, next) {
  var places = [
    { name: "Home", rating: 10 },
    { name: "Grandmas House", rating: 9 },
    { name: "San Francisco", rating: 5 },
    { name: "San Antonio", rating: 6 },
    { name: "Virginia Beach", rating: 5 },
  ];
  // create a name
  var myname = "Hibtall Dousa";
  res.render("index", {
    title: "Favorite Places",
    places: places,
    myname: myname,
  });
});
module.exports = router;

router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

var express = require("express");
var router = express.Router();

router.get("/bookings", function(req, res, next) {
    res.send("BOOKINGS ROUTE");
});

module.exports = router;
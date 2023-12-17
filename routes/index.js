var express = require("express");
var router = express.Router();

const AD_STATUS = {
  SUDOKU: { status: 200, message: "show ads" },
  BINGO: { status: 200, message: "show ads" },
  HAND_CRICKET: { status: 200, message: "show ads" },
};

/* GET home page. */
router.get("/sudoku", function (req, res) {
  res.send(AD_STATUS.SUDOKU);
});

module.exports = router;

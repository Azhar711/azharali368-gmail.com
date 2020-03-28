var express = require("express");
var router = express.Router();
var callApi = require("./callApi");

/* GET users listing. */
router.get("/", function(req, res, next) {
  const blockNumber = req.query.blockNum;
  callApi(blockNumber, (error, data) => {
    if (error) {
      res.status(404).send('Error Connecting');
      res.status(304).send('Error');
    }
    else if (data) res.status(200).send(data.body);
  });
});

module.exports = router;

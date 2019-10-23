var express = require("express");
var router = express.Router();

//var ctrlTestCrypto = require("../controllers/test.controller").testTestCrypto;
var getTests = require("../controllers/test.controller").getTests;
var getTest = require("../controllers/test.controller").getTest;
var getTestRun = require("../controllers/test.controller").getTestRun;
var saveTestRun = require("../controllers/test.controller").saveTestRun;
var saveTest = require("../controllers/test.controller").saveTest;
var runtests = require("../controllers/test.controller").runtests;


//test
router
  .route("/tests")
    .get(getTests);

    router
  .route("/test")
    .get(getTest);

    router
  .route("/testRun")
    .get(getTestRun);

    router
  .route("/testRun")
    .post(saveTestRun);

    router
  .route("/test")
    .post(saveTest);

    router
  .route("/runtests")
    .post(runtests);
    
module.exports = router;

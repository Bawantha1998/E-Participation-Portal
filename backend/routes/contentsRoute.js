const express = require("express");
// import contentsController from "../controllers/contentsController";
const contentsController = require("../controllers/contentsController");

const router = express.Router();

router.get("/contents", contentsController.getContents);
router.get("/participate/:slug", contentsController.getContentsBySlug);
router.get("/contentviews", contentsController.getContentviews);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getCons,
  createCon,
  getCon,
  updateCon,
  deleteCon,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getCons).post(createCon);
router.route("/:id").get(getCon).put(updateCon).delete(deleteCon);

module.exports = router;

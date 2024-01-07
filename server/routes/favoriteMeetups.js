const express = require("express");
const router = express.Router();

const {
  getFavoriteMeetups,
  updateFavoriteMeetup,
} = require("../controllers/favoriteMeetups");

router.route("/").get(getFavoriteMeetups);
router.route("/:id").patch(updateFavoriteMeetup);

module.exports = router;

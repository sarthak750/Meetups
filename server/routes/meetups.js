const express = require("express");
const router = express.Router();

const {
  getAllMeetups,
  createMeetup,
  getMeetup,
  updateMeetup,
  deleteMeetup,
} = require("../controllers/meetups");

router.route("/").get(getAllMeetups).post(createMeetup);

router.route("/:id").get(getMeetup).patch(updateMeetup).delete(deleteMeetup);

module.exports = router;

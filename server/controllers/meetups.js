const Meetup = require("../models/Meetup");

const getAllMeetups = async (req, res) => {
  try {
    const meetups = await Meetup.find({});
    res.status(200).json({ meetups });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createMeetup = async (req, res) => {
  try {
    const meetup = await Meetup.create(req.body);
    res.status(201).json({ meetup });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getMeetup = async (req, res) => {
  try {
    const { id: meetupID } = req.params;
    const meetup = await Meetup.findById(meetupID);
    if (!meetup) {
      return res.status(404).json({ msg: `No task with Id : ${meetupID}` });
    }

    res.status(200).json({ meetup });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateMeetup = async (req, res) => {
  try {
    const { id: meetupID } = req.params;
    const meetup = await Meetup.findByIdAndUpdate(meetupID, req.body, {
      new: true,
      runValidators: true,
    });
    if (!meetup) {
      return res.status(404).json({ msg: `No task with Id : ${meetupID}` });
    }
    res.status(200).json({ meetup });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteMeetup = async (req, res) => {
  try {
    const { id: meetupID } = req.params;
    const meetup = await Meetup.findByIdAndDelete(meetupID);
    if (!meetup) {
      return res.status(404).json({ msg: `No task with Id : ${meetupID}` });
    }
    res.status(200).json({ meetup });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  getAllMeetups,
  createMeetup,
  getMeetup,
  updateMeetup,
  deleteMeetup,
};

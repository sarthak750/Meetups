const Meetup = require("../models/Meetup");

const getFavoriteMeetups = async (req, res) => {
  try {
    const favoriteMeetups = await Meetup.find({ favorite: true });
    res.status(200).json({ favoriteMeetups });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateFavoriteMeetup = async (req, res) => {
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
    console.log(1);
    res.status(500).json({ msg: error });
  }
};

module.exports = { getFavoriteMeetups, updateFavoriteMeetup };

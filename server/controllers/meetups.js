const getAllMeetups = (req, res) => {
  res.send("All the meetups");
};

const createMeetup = (req, res) => {
  res.send("Create meetup");
};

const getMeetup = (req, res) => {
  res.send("Single meetup");
};

const updateMeetup = (req, res) => {
  res.send("Update meetup");
};

const deleteMeetup = (req, res) => {
  res.send("Delete Meetup");
};

module.exports = {
  getAllMeetups,
  createMeetup,
  getMeetup,
  updateMeetup,
  deleteMeetup,
};

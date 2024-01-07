import axios from "axios";
import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  const fetchMeetups = async () => {
    const response = await axios.get("http://localhost:5000/api/v1/meetups/");
    const getMeetups = await response.data.meetups;
    console.log(getMeetups);
    setMeetups(getMeetups);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMeetups();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} fetchMeetups={fetchMeetups} />
    </section>
  );
}

export default AllMeetupsPage;

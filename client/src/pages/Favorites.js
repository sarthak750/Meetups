import axios from "axios";
import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [favoriteMeetups, setFavoriteMeetups] = useState([]);

  const fetchMeetups = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/v1/favoriteMeetups/"
    );
    const getFavoriteMeetups = await response.data.favoriteMeetups;
    setFavoriteMeetups(getFavoriteMeetups);
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
      <h1>Favorite Meetups</h1>
      <MeetupList meetups={favoriteMeetups} fetchMeetups={fetchMeetups} />
    </section>
  );
}

export default FavoritesPage;

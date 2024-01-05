import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewMeetupPage() {
  const navigate = useNavigate();
  const createMeetupHandler = async (meetup) => {
    // eslint-disable-next-line
    const response = await axios.post(
      "http://localhost:5000/api/v1/meetups/",
      meetup
    );
    navigate("/", { replace: true });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onCreateMeetup={createMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;

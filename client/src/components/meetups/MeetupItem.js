import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import axios from "axios";

function MeetupItem(props) {
  const updateFavorites = async () => {
    try {
      await axios.patch(
        `http://localhost:5000/api/v1/favoriteMeetups/${props.id}`,
        { favorite: !props.favorite }
      );
    } catch (error) {
      console.log(error);
    }
  };
  function handleClick() {
    const update = async () => {
      await updateFavorites();
      console.log(1);
      props.fetchMeetups();
    };
    update();
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>

        <div className={classes.actions}>
          <button onClick={handleClick}>
            {props.favorite ? "Remove From Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

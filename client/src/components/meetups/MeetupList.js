import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList({ meetups, fetchMeetups }) {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup._id}
          id={meetup._id}
          title={meetup.title}
          image={meetup.image_url}
          address={meetup.address}
          description={meetup.description}
          favorite={meetup.favorite}
          fetchMeetups={fetchMeetups}
        />
      ))}
    </ul>
  );
}

export default MeetupList;

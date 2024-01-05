import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";
import { useState } from "react";

function NewMeetupForm(props) {
  const [formData, setFormData] = useState({
    title: "",
    image_url: "",
    address: "",
    description: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onCreateMeetup(formData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>

          <input
            type="text"
            required
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image_url">Meetup Image</label>
          <input
            type="text"
            required
            id="image_url"
            name="image_url"
            value={formData.image_url}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address"> Address </label>
          <input
            type="text"
            required
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;

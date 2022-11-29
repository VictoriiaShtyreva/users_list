import React, { useState } from "react";
import Card from "../Card.js";
import Button from "../Button.js";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAgeUser, setEnteredAgeUser] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault(); // it prevents default actions that browsers make when an event is triggered;
    // Validation
    if (
      enteredUserName.trim().length === 0 ||
      enteredAgeUser.trim().length === 0
    ) {
      return;
    }
    if (+enteredUserName < 1) {
      return;
    }
    setEnteredUserName(""); // reset input;
    setEnteredAgeUser(""); // reset input;
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value); // send entered value
  };

  const ageUserChangeHandler = (event) => {
    setEnteredAgeUser(event.target.value); // send entered value
  };

  return (
    <Card className={styles.carduser}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={userNameChangeHandler}
        ></input>
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          value={enteredAgeUser}
          onChange={ageUserChangeHandler}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

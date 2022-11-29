import React, { useState } from "react";
import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import styles from "./AddUser.module.css";
import Error from "../UI/Error.js";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAgeUser, setEnteredAgeUser] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault(); // it prevents default actions that browsers make when an event is triggered;
    // Validation
    if (
      enteredUserName.trim().length === 0 ||
      enteredAgeUser.trim().length === 0
    ) { setError({title: 'Invalid input', message: 'Please enter a valid name and age (non-empty values).'});
      return;
    }
    if (+enteredAgeUser < 1) {
      setError({title: 'Invalid age', message: 'Please enter a valid age (more than 0).'})
      return;
    }
    props.onAddUser(enteredUserName, enteredAgeUser);
    setEnteredUserName(""); // reset input;
    setEnteredAgeUser(""); // reset input;
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value); // send entered value
  };

  const ageUserChangeHandler = (event) => {
    setEnteredAgeUser(event.target.value); // send entered value
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <Error title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card className={styles.carduser}>
        <form onSubmit={addUserHandler} onKeyDown={(event) => {
          if (event.key === 'Enter') {
            addUserHandler(event);
          }
        }}>
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
    </div>
  );
};

export default AddUser;

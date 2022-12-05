import React, { useState, useRef } from "react";
import Card from "../UI/Card.js";
import Button from "../UI/Button.js";
import styles from "./AddUser.module.css";
import Error from "../UI/Error.js";

const AddUser = (props) => {
  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAgeUser, setEnteredAgeUser] = useState("");
  // this data not need to manage, you can use useref in input
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault(); // it prevents default actions that browsers make when an event is triggered;
    const enteredName = nameInputRef.current.value; // pass data througth using useRef();
    const enteredAge = ageInputRef.current.value;

    // Validation
    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) { setError({title: 'Invalid input', message: 'Please enter a valid name and age (non-empty values).'});
      return;
    }
    if (+enteredAge < 1) {
      setError({title: 'Invalid age', message: 'Please enter a valid age (more than 0).'})
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = ''; // reset input;
    ageInputRef.current.value = ''; // reset input;
  };

  // const userNameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value); // send entered value
  // };

  // const ageUserChangeHandler = (event) => {
  //   setEnteredAgeUser(event.target.value); // send entered value
  // };

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
            // value={enteredUserName}
            // onChange={userNameChangeHandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAgeUser}
            // onChange={ageUserChangeHandler}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

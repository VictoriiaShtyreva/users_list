import React from "react";
import styles from "./Error.module.css";
import Card from "./Card.js";
import Button from "./Button.js";

const Error = (props) => {
  return (
    <div>
      <div className={styles.backdrop}>
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles.content}>
            <p>{props.message}</p>
          </div>
          <footer className={styles.actions}>
            <Button>Okay</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default Error;

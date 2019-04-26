import React from "react";
import { Dialog, Slide } from "@material-ui/core";
import Button from "./Button";

const styles = {
  error: {
    textAlign: "center",
    padding: 12,
    color: "#fff",
    backgroundColor: "#ccc",
    height: "100vh"
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

export default ({ error, tryAgain }) => (
  <Dialog fullScreen open={error} TransitionComponent={Transition}>
    <div style={styles.error}>
      <img src="https://media.giphy.com/media/1BXa2alBjrCXC/giphy.gif" />
      <h1>{error.error.status}</h1>
      <h3>Message: {error.error.statusText}</h3>
      <h3>URL: {error.lastUrl}</h3>
      <Button onClick={tryAgain}>Try Again</Button>
    </div>
  </Dialog>
);

/**
 * Error.js
 *
 * Renders http response error using a MUI dialog
 */
import React from "react";
import PropTypes from "prop-types";
import { Dialog, Slide } from "@material-ui/core";
import Button from "./Button";

// inline styles for the error dialog
const styles = {
  error: {
    textAlign: "center",
    padding: 12,
    backgroundColor: "#ccc",
    height: "100vh"
  },
  img: {
    border: "1px solid #333",
    borderRadius: 1000
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const Error = ({ error, tryAgain }) => (
  <Dialog fullScreen open={Boolean(error)} TransitionComponent={Transition}>
    <div style={styles.error}>
      <img
        src="https://media.giphy.com/media/1BXa2alBjrCXC/giphy.gif"
        style={styles.img}
      />
      <h1>{error.error.status}</h1>
      <h3>Message: {error.error.statusText}</h3>
      <h3>URL: {error.lastUrl}</h3>
      <Button onClick={tryAgain}>CLOSE</Button>
    </div>
  </Dialog>
);

Error.propTypes = {
  // error status and message
  error: PropTypes.object,

  // closed the dialog
  tryAgain: PropTypes.func
};

export default Error;

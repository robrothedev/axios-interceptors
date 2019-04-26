/**
 * Error.js
 *
 * Renders http response error
 */
import React from "react";
import PropTypes from "prop-types";
import { Dialog, Slide } from "@material-ui/core";
import Button from "./Button";

const styles = {
  error: {
    textAlign: "center",
    padding: 12,
    backgroundColor: "#ccc",
    height: "100vh"
  },
  img: {
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
      <Button onClick={tryAgain}>Try Again</Button>
    </div>
  </Dialog>
);

Error.propTypes = {
  error: PropTypes.object,
  tryAgain: PropTypes.func
};

export default Error;
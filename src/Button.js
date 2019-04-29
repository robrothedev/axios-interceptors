/**
 * Button.js
 *
 * Wrapper for MUI button component
 */
import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

const MUIButton = ({ children, onClick }) => (
  <Button variant="contained" color="primary" onClick={onClick}>
    {children}
  </Button>
);

MUIButton.propTypes = {
  children: PropTypes.node,

  // onClick event handler
  onClick: PropTypes.func
};

export default MUIButton;

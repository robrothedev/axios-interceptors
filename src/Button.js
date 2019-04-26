import React from "react";
import { Button } from "@material-ui/core";

export default ({ children, onClick }) => (
  <Button variant="contained" color="primary" onClick={onClick}>
    {children}
  </Button>
);

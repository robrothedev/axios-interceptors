import React, { useEffect, useState } from "react";
import PubSub from "pubsub-js";
import Http from "./Http";
import Error from "./Error";
import Button from "./Button";

// bad url on purpose to demonstrate interceptors catching error response
const throwError = async () => await Http.get("/asdf");

export default () => {
  // error state to toggle error dialog if applicable
  let [error, setError] = useState();

  useEffect(() => {
    PubSub.subscribe("API_ERROR", (msg, error) => setError(error));
    return () => PubSub.unsubscribe("API_ERROR");
  }, []);

  // reset error state
  let tryAgain = () => setError();

  return (
    <div className="App">
      {error && <Error error={error} tryAgain={tryAgain} />}
      {!error && (
        <Button onClick={throwError}>Click Here to Throw Error</Button>
      )}
    </div>
  );
};

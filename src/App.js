import React, { useEffect, useState } from "react";
import PubSub from "pubsub-js";
import Http from "./Http";
import Error from "./Error";
import Button from "./Button";

// bad url on purpose do demonstrate interceptors
const throwError = async () => await Http.get("/asdf");

export default () => {
  let [error, setError] = useState();

  useEffect(() => {
    // listen for an error and update the state to display the error
    PubSub.subscribe("API_ERROR", (msg, error) => setError(error));
    return () => PubSub.unsubscribe("API_ERROR");
  }, []);

  // reset error state
  let tryAgain = () => setError();

  return (
    <div className="App">
      {error ? (
        <Error error={error} tryAgain={tryAgain} />
      ) : (
        <Button onClick={throwError}>Click Here to Throw Error</Button>
      )}
    </div>
  );
};

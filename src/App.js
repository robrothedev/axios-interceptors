import React, { useEffect, useState } from "react";
import PubSub from "pubsub-js";
import Api from "./Api";
import Error from "./Error";
import Button from "./Button";

const throwError = async () => Api.throwError();

export default () => {
  let [error, setError] = useState();

  useEffect(() => {
    PubSub.subscribe("API_ERROR", (msg, error) => setError(error));
    return () => PubSub.unsubscribe("API_ERROR");
  }, []);

  let tryAgain = () => setError();

  return (
    <div className="App">
      {error && <Error error={error} tryAgain={tryAgain} />}
      {!error && <Button onClick={throwError}>Throw Error</Button>}
    </div>
  );
};

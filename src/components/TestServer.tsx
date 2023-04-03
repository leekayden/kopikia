import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiHost } from "./global/definitions";

interface TestResponse {
  message: string;
}

const TestServer: React.FC = () => {
  const [response, setResponse] = useState<TestResponse>({ message: "" });

  useEffect(() => {
    axios
      .get(`${apiHost}test`)
      .then((response: { data: TestResponse }) => {
        console.log(response, response.data);
        setResponse(response.data);
      })
      .catch((error: unknown) => console.log(error));
  }, []);

  return (
    <div>
      <h1>
        Status:{" "}
        {response.message
          ? "Received!"
          : `Waiting for response from host (${apiHost}/test)`}
      </h1>
      <p>Response: {response.message ? response.message : "Fetching..."}</p>
    </div>
  );
};

export default TestServer;

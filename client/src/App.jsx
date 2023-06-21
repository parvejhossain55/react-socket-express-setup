import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const socket = io.connect();
    socket.on("message", (data) => {
      setMessage(data);
    });
  }, []);

  return <div>{message}</div>;
};

export default App;

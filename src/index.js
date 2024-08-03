import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const userId = "admin";

function Milliseconds() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1); // Update every millisecond

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="full-screen">
      {date.getMinutes()}:{date.getSeconds()} : {date.getMilliseconds()}
    </div>
  );
}

function UserGreeting(props) {
  const greetText = props.greetText;
  if (props.greetText) {
    return <h1>Welcome back {greetText}!</h1>;
  }
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  const userId = props.userId;

  if (isLoggedIn) {
    return <UserGreeting greetText={userId} />;
  }
  return <GuestGreeting />;
}

function App() {
  return (
    <div className="App">
      {/* <Greeting isLoggedIn={true} userId={userId} /> */}
      <Milliseconds />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

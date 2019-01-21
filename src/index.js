import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import SimpleReactValidator from "./simpleReactValidator";
import "./styles.css";

function App(props) {
  const validator = new SimpleReactValidator({});
  validator.showMessages();

  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const handleChange = e => {
    const { value } = e.target;

    setPassword(value);
  };

  const handleSubmit = () => {
    if (validator.allValid()) {
      console.log("form submitted");
    } else {
      // validator.showMessages();
      // rerender to show messages for the first time
      // forceUpdate(true);
      setShow(true);
    }
  };

  const validate = (field, inputValue, validations, options = {}) => {
    console.log("Validate Run");
    const validatedMsg = validator.message(
      field,
      inputValue,
      validations,
      (options = {})
    );

    if (show) {
      return validatedMsg;
    } else {
      return;
    }
  };

  return (
    <div className="App">
      <input name={"password"} value={password} onChange={handleChange} />
      {validate("password", password, "required|min:10", {
        messages: {
          required: "Password is required"
        }
      })}

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

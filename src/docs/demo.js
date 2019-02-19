import React, { useState } from 'react'
import useValidator from '../hooks/useValidator'

import "./styles.css";

function App(props) {
  const [validator, showValidationMessage] = useValidator()
  const [password, setPassword] = useState("");

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
      showValidationMessage(true);
    }
  };

  return (
    <div className="App">
      <input name={"password"} value={password} onChange={handleChange} />
      {validator.message("password", password, "required|min:10", {
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

export default App
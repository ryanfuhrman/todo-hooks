import { useState } from "react";
export default intialVal => {
  // this sets state
  // value is the value in state / setValue is a function for updating value
  // initialVal is the initial value of state that you set when calling state
  // in this situation intialVal is being passed in when calling useInputState in another component
  const [value, setValue] = useState(intialVal);
  // handleChange function takes in an event
  const handleChange = e => {
    // setValue is the function initalized in the hook useState to update state
    // e.target.value is the value passed by calling handleChange (the value filled in a form in this situation)
    setValue(e.target.value);
  };
  // reset is a function to set value in state to an empty string after the value has been stored/used from handleChange
  const reset = () => {
    setValue("");
  };
  // return the value and both functions
  return [value, handleChange, reset];
};

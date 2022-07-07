import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Mo");
  const [lastName, setLastName] = useState("Al Saleh");
  const [submittedData, setSubmittedData]= useState([]); // used to display submitted names
  const [errors, setErrors]= useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (firstName.length > 0) {
      const formData = {firstName: firstName, lastName: lastName}; // collects the name into an object
      const dataArray = [...submittedData, formData]; // collects all name objects in an array

      setSubmittedData(dataArray);
      console.log(dataArray)
      setFirstName(""); // clears the input fields
      setLastName("");
      setErrors([])
    } else {
      setErrors(["First name is required!"])
    }
    
  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>

    </form>
    {/* conditional rendering: if errors exist, show them */}
    {errors.length > 0
      ? errors.map((error, index)=> (
        <p key={index} style={{ color: "red" }}>
          {error}
        </p>
      ))
      : null
    }
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;

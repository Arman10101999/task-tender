import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "./employeeReducer";

const EmployeeForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const employee = {
      id: Date.now(), //generate a new ID
      name,
    };

    dispatch(addEmployee(employee));
    setName("");
  };

  return (
    <div>
      <h2> Add Employee </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ENter the employee name "
          required
        />
        <button type="submit">ADD </button>
      </form>
    </div>
  );
};

export default EmployeeForm;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee } from "./employeeReducer";

const EmployeeList = () => {
  const employees = -useSelector((state) => state.employees);

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
  };

  return (
    <div>
      <h2> Employee List </h2>
      <ul>
        {" "}
        {employees.map((employee) => (
          <li key={employee.id}>
            {employee.name}
            <button onClick={() => handleDelete(employee.id)}> Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;

import React from "react";
import { useSelector } from "react-redux";
import EmployeeList from "./EmployeeList";
import EmployeeForm from "./EmployeeForm";

const EmployeeManagement = () => {
  const employees = useSelector((state) => state.employees);

  return (
    <div>
      <h1>Employee Managemnet System </h1>
      <EmployeeList employees={employees} />
      <EmployeeForm />
    </div>
  );
};

export default EmployeeManagement;

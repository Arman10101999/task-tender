import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },

    updateEmployee: (state, action) => {
      const { id, name } = action.payload;
      const employee = state.employees.find((emp) => emp.id === id);
      if (employee) {
        employee.name = name;
      }
    },
    deleteEmployee: (state, action) => {
      const id = action.payload;
      state.employees = state.employees.filter((emp) => emp.id !== id);
    },
  },
});

export const { addEmployee, updateEmployee, deleteEmployee } =
  employeeSlice.actions;
export default employeeSlice.reducers;

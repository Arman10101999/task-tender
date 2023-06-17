import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./reducers/employeeReducer";

const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});

export default store;

// import usersReducer from './usersSlice';

// ....

// const store = configureStore({
//   reducer: {
//     users: usersReducer
//   }
// })

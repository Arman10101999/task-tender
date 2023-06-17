import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import EmployeeManagement from "./EmployeeManagement";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1> Employee Management System </h1>
        <EmployeeManagement />
      </div>
    </Provider>
  );
};

export default App;

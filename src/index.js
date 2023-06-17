import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import EmployeeManagement from "./EmployeeManagement";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  <Provider store={store}>
    <EmployeeManagement />
  </Provider>,

  document.getElementById("root")
);

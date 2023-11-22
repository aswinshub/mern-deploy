import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./elements/Home";
import Login from "./ui-component/Login";
import Main from "./ui-component/Main";
import AdminHome from "./elements/AdminHome";
import Addemp from "./elements/Addemp";
import MainAdm from "./ui-component/MainAdm";
import { Logout } from "./Logout";
import { RequireAuth } from "./Auth";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/employee"
          element={
            <RequireAuth>
              <Main child={<Home />} />
            </RequireAuth>
          }
        />
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <MainAdm child={<AdminHome />} />
            </RequireAuth>
          }
        />

        <Route path="/empform" element={<Addemp />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;

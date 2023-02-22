import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Login } from "../../pages/Login/Login";
import { ProtectedRouter } from "../ProtectedRouter";
import { User } from "../../pages/User/User";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login/*" element={<Login />} />
      <Route
        path="/conta/*"
        element={
          <ProtectedRouter>
            <User />
          </ProtectedRouter>
        }
      />
    </Routes>
  );
};

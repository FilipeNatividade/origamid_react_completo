import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Login } from "../../pages/Login/Login";
// import { LoginForm } from "../../pages/Login/components/LoginForm/LoginForm";
import { LoginCreate } from "../../pages/Login/components/LoginCreate/LoginCreate";
import { LoginPasswordLost } from "../../pages/Login/components/LoginPasswordLost/LoginPasswordLost";
import { LoginPasswordReset } from "../../pages/Login/components/LoginPasswordReset/LoginPasswordReset";

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Login */}
      <Route path="login" element={<Login />} />
      {/* <Route path="loginForm" element={<LoginForm />} /> */}
      <Route path="loginCreate" element={<LoginCreate />} />
      <Route path="loginPasswordLost" element={<LoginPasswordLost />} />
      <Route path="loginPasswordReset" element={<LoginPasswordReset />} />
    </Routes>
  );
};

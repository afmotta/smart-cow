import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

export const UnauthenticatedApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='signin' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='*' element={<Navigate to='/signin' replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
};

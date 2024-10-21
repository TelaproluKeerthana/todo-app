import "./todo.css";
import { Children, useState } from "react";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "./LoginComponent";
import ListComponent from "./ListComponent";
import HeaderComponent from "./HeaderComponent";
import TodoComponent from "./TodoComponent";
import FooterComponent from "./FooterComponent";
import LogoutComponent from "./LogoutComponent";
import ErrorComponent from "./ErrorComponent";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
  Link,
  Navigate
} from "react-router-dom";
import AuthProvider, { useAuth } from "./security/AuthContext";
const AuthenticatedRoute =({children}) => {
  const authContext=useAuth()
  if(authContext.authenticated){
    return children
  return <Navigate to="/" />
  }
}
const TodoApp = () => {
  return (
    <div className="TodoApp">

      <AuthProvider>
      <BrowserRouter>
      <HeaderComponent/>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/" element={<LoginComponent />} />
          <Route path="/welcome/:username" element={
            <AuthenticatedRoute><WelcomeComponent /></AuthenticatedRoute>} />
          <Route path="/todos" element={  <AuthenticatedRoute><ListComponent /></AuthenticatedRoute>} />
          <Route path="/todo/:id" element={  <AuthenticatedRoute><TodoComponent /></AuthenticatedRoute>} />
          <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent/></AuthenticatedRoute>} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
};

export default TodoApp;

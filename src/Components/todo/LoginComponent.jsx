import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";
const LoginComponent = () => {
    const [username, setUsername] = useState("sunny");
    const [password, setPassword] = useState(null);
    const [failure, setFailure] = useState(false);
    const navigate = useNavigate();
    const authContext=useAuth()
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
    const handleSubmit = async() => {
      if (await authContext.login(username,password)) {
        navigate(`/welcome/${username}`);
      } else {
        setFailure(true);
      }
    };
    return (
      <div className="Login">
        <div className="LoginForm">
          {failure && <>Login Failure</>}
          <>
            <label>User Name</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </>
          <>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </>
          <>
            <button type="button" name="login" onClick={handleSubmit}>
              Login
            </button>
          </>
        </div>
      </div>
    );
  };
  export default LoginComponent;
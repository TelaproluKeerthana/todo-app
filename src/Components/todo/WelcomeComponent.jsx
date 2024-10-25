import { useParams,Link } from "react-router-dom";
import { useState } from "react";
import { retriveHelloWorldBean } from "./api/HelloWorldApiService";
import { useAuth } from "./security/AuthContext";
const WelcomeComponent = () => {

    const { username } = useParams();
    const[message,setMessage]=useState(null)
    const callHelloWorldRestApi=()=>{
      console.log('called')
    //   axios.get("http://localhost:8080/hello-world")
    //   .then((response)=>successfulResponse(response))
    //   .catch((error)=>errorResponse(error))
    //   .finally(()=>console.log('cleanup'))
    // }
      retriveHelloWorldBean()
      .then((response)=>successfulResponse(response))
      .catch((error)=>errorResponse(error))
      .finally(()=>console.log('cleanup'))
    }

    const successfulResponse=(response)=>{
        console.log(response)
        setMessage(response.data.message)
    }

    const errorResponse=(error)=>{
      console.log(error)
  }

    return <div className="Welcome">Welcome {username}
    <div>
      View your todos <Link to='/todos'> click here</Link>
      </div>
      <div>
        <button className="btn btn-success" onClick={callHelloWorldRestApi}>Call HelloApi</button>
      </div>
      <>{message}</>
      </div>;
  };
export default WelcomeComponent;
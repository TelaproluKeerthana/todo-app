import axios from 'axios';

export const retriveHelloWorldBean=()=> axios.get("http://localhost:8080/hello-world-bean")
 

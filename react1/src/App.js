import axios from "axios";
import { useEffect } from "react";
import './App.css';

function App() {
  const key = "359eec33cd1498993aed25e9eed9406d";
  useEffect(() => {
    async function getApi(){
      try{
        const response = await axios.get("/user?ID=12345");
        console.log(response);
      }catch(error){
        console.error(error);
      }
    }
  })
  
  return (
    <div className="App">
      Batu
    </div>
  );
}

export default App;

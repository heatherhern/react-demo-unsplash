import { useState } from "react";
import axios from "axios";

function App() {
  const url = "https://api.unsplash.com/photos/?client_id=EFPVpScTkPLXh1g-f7SXLo62iM5XrmDH6jCGfeqHdDs"
  const [unsplashArray, setUnsplashArray] = useState([]);
  
  const sendGetRequest = async () => {
    try {
      const response = await axios.get(url);
      setUnsplashArray(response.data);
      console.log(response);
      console.log(unsplashArray);
    } catch (err) {
      console.error(err);
    }
    sendGetRequest();
    return ("");
    // <div>
    // <h1>my react app</h1>
    //   const photosArray = {unsplashArray.map((item) => (
    //   <img src={photosArray.data.url}
  };
}


export default App;

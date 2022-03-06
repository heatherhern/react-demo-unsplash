import { useState, useEffect } from "react";
import axios from "axios";



function App() {
  const url = "https://api.unsplash.com/photos/?client_id=EFPVpScTkPLXh1g-f7SXLo62iM5XrmDH6jCGfeqHdDs"
  const [unsplashArray, setUnsplashArray] = useState([]);

  useEffect(() => {
    axios.get(url);
    setUnsplashArray(res.data);
    console.log(res.data);
  }, []);

    sendGetRequest();
    useEffect(()

      return (
        <div>hello world</div>
      );
        // <div>
        // <h1>my react app</h1>
        //   const photosArray = {unsplashArray.map((item) => (
        //   <img src={photosArray.data.url}
    // };
};





export default App;

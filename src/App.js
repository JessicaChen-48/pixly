import "./App.css";
import AddImgForm from "./AddImgForm";
import { useState } from "react";

function App() {
  const [image, setImage] = useState({});

  function set(img) {
    setImage(img);
  }

  console.log("image: ", image);
  
  return (
    <div className="App">
      <AddImgForm set={set} />
    </div>
  );
}

export default App;

import "./App.css";
import AddImgForm from "./AddImgForm";
import { useState } from "react";
import Api from "./Api"

function App() {
  const [image, setImage] = useState({});

  function set(img) {
    setImage(img);
  }

  async function postAPic(filePath) {
    const resp = await Api.postAPic(filePath);
  }

  console.log("image: ", image);
  
  return (
    <div className="App">
      <AddImgForm set={set} postAPic={postAPic} />
    </div>
  );
}

export default App;

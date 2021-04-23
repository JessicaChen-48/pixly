import { useState, useEffect } from "react";
import Api from "./Api";

function AddImgForm() {

  const [ImgData, setImgData] = useState({ image: "" });
  const [ImgList, setImgList] = useState([])

  useEffect(() => {
    async function turtles() {
      setImgList(await Api.getAllPics())
    }
    turtles()
  }, [])

  function handleChange(e) {
    e.preventDefault();
    setImgData(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await Api.postAPic(ImgData);
  }

  return (
    <div>
      <div> {ImgList.length && ImgList.map(obj => <img key={obj.link} src={obj.link} alt=""></img>)} </div>
      <form onSubmit={handleSubmit}>
        <input
          name="image"
          type="file"
          onChange={handleChange}
        ></input>
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}

export default AddImgForm;

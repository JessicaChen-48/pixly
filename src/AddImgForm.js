import { useState } from "react";
import Api from "./Api";

function AddImgForm() {
  const [ImgData, setImgData] = useState({ image: "" });

  function handleChange(e) {
    e.preventDefault();
    setImgData(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await Api.postAPic(ImgData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="image"
        type="file"
        onChange={handleChange}
      ></input>
      <button type="submit">Submit!</button>
    </form>
  );
}

export default AddImgForm;

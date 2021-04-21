import { useState } from "react";

function AddImgForm({ set, postAPic }) {
  const [formData, setFormData] = useState({ image: "" });
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const {image} = formData
    console.log("formData", formData)
    console.log("formData image", image)
    await postAPic(image)
    set(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="image"
        value={formData.image}
        type="file"
        onChange={handleChange}
        id="image"
      ></input>
      <button type="submit">Submit!</button>
    </form>
  );
}

export default AddImgForm;

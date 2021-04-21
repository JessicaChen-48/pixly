import { useState } from "react";

function AddImgForm({ set }) {
  const [formData, setFormData] = useState({ image: "" });
  function handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    set(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="image"
        value={formData.image}
        type="file"
        onChange={handleChange}
      ></input>
      <button type="submit">Submit!</button>
    </form>
  );
}

export default AddImgForm;

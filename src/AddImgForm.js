function AddImgForm () {


  return (
    <form action="/">
      <input type="file" name="image" accept="image/jpeg"></input>
      <button type="submit">Add photo!</button>
    </form>
  )

}

export default AddImgForm;
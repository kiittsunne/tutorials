import { useState } from "react";
import "./App.css";
import axios from "axios";
import { Image } from "cloudinary-react";

function App() {
  const [files, setFiles] = useState(null);

  function uploadImage() {
    // files is an arr
    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("upload_preset", "tutorials");

    // axios
    //   .post("https://api.cloudinary.com/v1_1/kiittsunne/image/upload", formData)
    //   .then((res) => console.log(res));
    console.log(files);
  }

  return (
    <div className="App">
      <input
        multiple={true}
        type="file"
        name="img"
        id="img"
        onChange={(e) => {
          setFiles(e.target.files);
        }}
      />
      <button onClick={uploadImage}>Upload</button>
      {/* <Image
        cloudName="kiittsunne"
        publicId="https://res.cloudinary.com/kiittsunne/image/upload/v1665051566/tutorials/bcgjs4mejj0zmr1mqyn3.png"
      /> */}
    </div>
  );
}

export default App;

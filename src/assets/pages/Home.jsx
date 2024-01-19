import React, { useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref as dref, set, push } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
const Home = () => {
  const id = uuidv4();
  const storage = getStorage();
  const db = getDatabase();
  const navigate = useNavigate();

  let [image, setImage] = useState();
  let handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  let handleClick = () => {
    const storageRef = ref(storage, id);
    uploadBytes(storageRef, image)
      .then((snapshot) => {
        getDownloadURL(storageRef).then((downloadURL) => {
          set(push(dref(db, "gal/")), {
            img: downloadURL,
          });
        });
      })
      .then(() => {
        navigate("/gallery");
      });
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>File Upload Image</h2>
      <input onChange={handleImage} type="file" />
      <div className="">
        <button onClick={handleClick}>Upload</button>
      </div>
    </div>
  );
};

export default Home;

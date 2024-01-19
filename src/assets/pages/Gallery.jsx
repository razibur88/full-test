import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalImage from "react-modal-image";
import { getDatabase, ref, onValue } from "firebase/database";
const Gallery = () => {
  let [image, setImage] = useState([]);
  let [back, setBack] = useState();
  const db = getDatabase();
  const navigate = useNavigate();
  useEffect(() => {
    const starCountRef = ref(db, "gal/");
    let arr = [];
    onValue(starCountRef, (snapshot) => {
      snapshot.forEach((item) => {
        arr.push(item.val());
        console.log(item.val());
      });
      setImage(arr);
    });
  }, [image]);
  return (
    <div>
      <p onClick={() => setBack(navigate("/home"))}>back</p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {image.map((item) => (
          <div style={{ width: "32%" }}>
            <ModalImage
              style={{ width: "100%" }}
              small={item.img}
              large={item.img}
              alt="Hello World!"
            />
            ;
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

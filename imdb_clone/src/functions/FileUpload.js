import React from "react";
import Resizer from "react-image-file-resizer";
import axios from "axios";

import { Avatar, Badge, Space } from "antd";

const FileUpload = (props) => {
  const { values, setValues } = props;
  const fileUploadAndResize = (e) => {
    let files = e.target.files;
    let allUploadedFiles = values.images;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          "JPG",
          100,
          0,
          (uri) => {
            axios
              .post(
                `${process.env.REACT_APP_API}/api/uploadimages`,
                { image:uri},
              )
              .then((result) => {
                console.log("Image Upload Res Data", result);
                allUploadedFiles.push(result.data);
                setValues({ ...values, images: allUploadedFiles });
              })
              .catch((err) => {
                console.log("Cloudinary upload error", err);
              });
          },
          "base_64"
        );
      }
    }
  };

  const handleImageRemove = (public_id) => {
    // setLoading(true)
    axios.post(`${process.env.REACT_APP_API}/api/removeimages`,{public_id}).then((result)=>{
    //   setLoading(false);
      const {images}=values
      let filterImages=images.filter((item)=>{
        return item.public_id!==public_id;
      })
      setValues({...values,images:filterImages});
    }).catch((err)=>{
    //   setLoading(false);
      console.log(err);
    })
  };

  return (
    <div className="mt-4 ms-4 ps-4">
      <div className="row">
        {values.images &&
          values.images.map((img) => (
            <span style={{ width: "auto" }}>
              <Badge
                count="X"
                key={img.public_id}
                onClick={() => handleImageRemove(img.public_id)}
                style={{ cursor: "pointer" }}
              >
                <Avatar
                  shape="square"
                  src={img.url}
                  size={150}
                  className="ml-3"
                />
              </Badge>
            </span>
          ))}
      </div>
      <div className="row" >
        <label className="btn btn-primary btn-raised" Style="width:200px">
          Choose File
          <input
            type="file"
            multiple
            accept="images/*"
            hidden
            onChange={fileUploadAndResize}
          />
        </label>
      </div>
    </div>
  );
};

export default FileUpload;

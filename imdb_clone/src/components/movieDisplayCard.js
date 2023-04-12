import React from "react";
import { Card } from "antd";
import Link from "antd/es/typography/Link";
import { EyeOutlined, DeleteOutlined } from "@ant-design/icons";
const { Meta } = Card;

const MovieDisplay = (props) => {
  const { url, name, yor, description } = props;
  return (
    // <div>

    // <div className="card" style={{ width: "18rem" }}>
    //   <img src={url} className="card-img-top sealImage" />
    //   <div className="card-body">
    //     <h5 className="card-title">{props.name}</h5>
    //     <p className="card-text">{props.description}</p>
    //     <p className="card-text">{props.yor}</p>
    //   </div>
    // </div>
    // </div>

    <Card
      cover={
        <img
          src={url}
          style={{ height: "300px", width: "400px", objectFit: "cover" }}
          className="p-2"
        />
      }
      // actions={[
      //   <Link to="">
      //     <EyeOutlined className="text-danger" /> <br /> View Movie
      //   </Link>,
      //   <>
      //     <DeleteOutlined className="text-danger" /> <br /> Delete
          
      //   </>,
      // ]}
    >
      <Meta title={name} />
      <p>{`Year Of Release ${yor}.`}</p>
      <p>{` Description: ${description && description.substring(0, 40)}...`}</p>
    </Card>
  );
};

export default MovieDisplay;

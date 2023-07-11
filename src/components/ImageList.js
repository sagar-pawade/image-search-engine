import React from "react";

const ImageList = (props) => {
  const imgs = props.foundImages.map((img) => {
    return (
      <img
        className="Img"
        key={img.id}
        src={img.urls.regular}
        alt={img.alt_description}
      />
    );
  });

  return <div className="image__list">{imgs}</div>;
};

export default ImageList;

import React from "react";
import "./collection-item.styles.scss";
// import { withRouter } from "react-router-dom";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className={"collection-item"}>
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
      {/* <span>{id}</span>
      <span>{imageUrl}</span> */}
    </div>
  </div>
);

export default CollectionItem;

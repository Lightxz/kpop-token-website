import React from "react";
import "./Container.css";

const Container = (props) => {
  return <div className="custom-container">{props.children}</div>;
};

export default Container;

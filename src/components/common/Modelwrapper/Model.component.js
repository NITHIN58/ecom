import React from "react";
import PropTypes from "prop-types";
import "./modelstyle.css";


export default function Model(props) {
  return (
    <div
      className={`${props.className} modelComponent`}
      style={{
        height: `${props.height || 500}px`,
        width: `${props.width || 700}px`,
      }}
    >
      {props.children}
    </div>
  );
}

Model.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  height: PropTypes.number,
  width: PropTypes.number,
};
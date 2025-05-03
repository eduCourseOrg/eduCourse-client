/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import React from "react";
const Field = ({ label, children, htmlFor, error,className }) => {
  const getChildId = (children) => {
   const child = React.Children.only(children);
    if ("id" in child?.props) {
      return child.props.id;
    }
  };
  const id = htmlFor || getChildId(children);
  return (
    <div
      className={`flex flex-col gap-2 ${className}`}
     
    >
      {label && <label htmlFor={id}>{label}</label>}
      {children}
      {error && <div>{error.message}</div>}
    </div>
  );
};
Field.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string,
  error: PropTypes.string,
};
export default Field;

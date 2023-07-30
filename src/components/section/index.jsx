import React from "react";
import PropTypes from "prop-types";

export const Section = (props) => {
  return <div className="section">{props.children}</div>;
};
export const SectionTitle = (props) => {
  return <div className="section__title">{props.children}</div>;
};
export const SectionBody = (props) => {
  return <div className="section__body">{props.children}</div>;
};

Section.propTypes = {};

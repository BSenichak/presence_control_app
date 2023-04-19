import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import style from "./Footer.module.scss"

export const Footer = (props) => {
  return <footer className={style.wrapper}>
    <div>© Senychak Bohdan</div>
  </footer>;
};

Footer.propTypes = {
  first: PropTypes.array
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

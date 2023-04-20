import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import style from "./Header.module.scss"
import ThemeButton from "./ThemeButton/ThemeButton";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return <header className={style.wrapper}>
    <ThemeButton/>
    <Link to="/" className={style.logo}>Контроль присутності учнів</Link>
    <div className={style.btns}></div>
  </header>;
};

Header.propTypes = {
  toggleTheme: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

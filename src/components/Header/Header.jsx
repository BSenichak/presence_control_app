import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import style from "./Header.module.scss"
import ThemeButton from "./ThemeButton/ThemeButton";

export const Header = (props) => {
  return <header className={style.wrapper}>
    <ThemeButton/>
    <div className={style.logo}>Контроль присутності учнів</div>
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

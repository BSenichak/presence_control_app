import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import style from "./Header.module.scss"
import ThemeButton from "./ThemeButton/ThemeButton";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { openTab } from "../../store/tab/tabActions";

export const Header = (props) => {
  return <header className={style.wrapper}>
    <ThemeButton/>
    <Link to="/" className={style.logo}>Контроль присутності учнів</Link>
    <div className={style.btns}>
      <IconButton aria-label="MenuIcon" onClick={()=>props.openTab()}>
        <MenuIcon/>
      </IconButton>
    </div>
  </header>;
};

Header.propTypes = {
  toggleTheme: PropTypes.func,
  openTab: PropTypes.func,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    openTab: ()=>dispatch(openTab())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

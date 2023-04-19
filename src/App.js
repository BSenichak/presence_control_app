import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/auth/LoginPage/LoginPage";
import style from "./style/app.module.scss";
import { loadTheme } from "./store/theme/themeActions";

export const App = (props) => {
  const [render, setRender] = useState(true);
  if (render) {
    props.loadTheme();
    setRender(false);
  }
  useEffect(() => {
    if (props.theme === "dark") {
      document.body.classList.remove(style.lightTheme);
      document.body.classList.add(style.darkTheme);
    } else {
      document.body.classList.remove(style.darkTheme);
      document.body.classList.add(style.lightTheme);
    }
  }, [props.theme]);

  return (
    <div className={style.wrapper}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

App.propTypes = {
  loadTheme: PropTypes.func,
  theme: PropTypes.string,
};

const mapStateToProps = (state) => ({
  theme: state.theme.theme,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadTheme: () => {
      dispatch(loadTheme());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

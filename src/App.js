import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./components/auth/LoginPage/LoginPage";
import style from "./style/app.module.scss";
import { loadTheme } from "./store/theme/themeActions";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "./style/theme";
import { darkTheme } from "./style/theme";

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
    <ThemeProvider theme={props.theme === "dark" ? darkTheme : lightTheme}>
    <div className={style.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
      <Footer/>
    </div>
    </ThemeProvider>
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
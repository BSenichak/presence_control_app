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
import { updateAuthData } from "./store/auth/updateData/updateDateAction";
import NotFound from "./components/NotFound/NotFound";
import Tab from "./components/Tab/Tab";
import RegisterPage from "./components/auth/RegisterPage/RegisterPage";
import RecoveryPasswodPage from "./components/auth/RecoveryPasswordPage/RecoveryPasswordPage";

export const App = (props) => {
  const [render, setRender] = useState(true);

  if (render) {
    props.loadTheme();
    props.loadUserData();
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegisterPage />} />
          <Route path="/recoverypassword" element={<RecoveryPasswodPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Tab />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

App.propTypes = {
  loadTheme: PropTypes.func,
  loadUserData: PropTypes.func,
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
    loadUserData: () => dispatch(updateAuthData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { TextField, Button, Alert, Snackbar } from "@mui/material";
import Slide from "@mui/material/Slide";
import style from "./LoginPage.module.scss";
import { login } from "../../../store/auth/login/loginActions";

export const LoginPage = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={style.wrapper}>
      <form>
        <TextField
          id={style.login}
          label="Email"
          variant="filled"
          autoComplete="username"
          type=""
          onChange={(e) => setLogin(e.target.value)}
          value={login}
        />
        <TextField
          id={style.password}
          label="Password"
          variant="filled"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <Button
          variant="contained"
          onClick={() => props.login(login, password)}
        >
          Увійти
        </Button>
      </form>
      {JSON.stringify(props.credential)}
      {props.loading && "ddd"}
      <Snackbar
        open={props.error}
        autoHideDuration={1000}
        TransitionComponent={Slide}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          Не вірний логін або пароль
        </Alert>
      </Snackbar>
    </div>
  );
};

LoginPage.propTypes = {
  credential: PropTypes.object,
  loading: PropTypes.bool,
  login: PropTypes.func,
  error: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  credential: state.auth.login.credential,
  login: state.auth.login.loading,
  error: state.auth.login.error.code === "auth/user-not-found",
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (Login, Password) => dispatch(login(Login, Password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

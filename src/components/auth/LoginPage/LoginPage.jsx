import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { TextField, Button, Alert, Snackbar } from "@mui/material";
import Slide from "@mui/material/Slide";
import style from "./LoginPage.module.scss";
import { login } from "../../../store/auth/login/loginActions";
import CircularProgress from '@mui/material/CircularProgress';

export const LoginPage = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (props.error) {
      setOpen(true);
    }
  }, [props.error]);

  const noficationClose = () => {
    setOpen(false);
  };

  return (
    <div className={style.wrapper}>
      <img src="/Images/login.svg" alt="Login" className={style.logo}/>
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
      {props.loading && <div className={style.loader}><CircularProgress /></div>}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={noficationClose}
        TransitionComponent={Slide}
      >
        <Alert
          onClose={noficationClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Не вірно введенна пошта або пароль
        </Alert>
      </Snackbar>
    </div>
  );
};

LoginPage.propTypes = {
  loading: PropTypes.bool,
  login: PropTypes.func,
  error: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: state.auth.login.loading,
  error: state.auth.login.error.code === "auth/user-not-found" || state.auth.login.error.code === "auth/wrong-password",
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (Login, Password) => dispatch(login(Login, Password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

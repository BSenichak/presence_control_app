import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Alert,
  Snackbar,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import style from "./LoginPage.module.scss";
import { login } from "../../../store/auth/login/loginActions";
import CircularProgress from '@mui/material/CircularProgress';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useNavigate } from "react-router-dom";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";

export const LoginPage = (props) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (props.error) {
      setOpen(true);
    }
    if(props.isLogined){
      const t = setTimeout(()=>{
        navigate("/")
        return clearTimeout(t)
      }, 2000)    
    }
  }, [props.error, navigate, props.isLogined]);

  const noficationClose = () => {
    setOpen(false);
  };

  return (
    <div className={style.wrapper}>
      <img src="/Images/login.svg" alt="Login" className={style.logo}/>
      <form>
      <FormControl variant="filled">
          <InputLabel htmlFor="email">Електронна пошта</InputLabel>
          <Input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            id="email"
            type="email"
          />
        </FormControl>
      <FormControl variant="filled">
          <InputLabel htmlFor="password">Пароль</InputLabel>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type={!passwordVisibility ? "password" : "text"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="password"
                  onClick={() => setPasswordVisibility(!passwordVisibility)}
                >
                  {passwordVisibility ? (
                    <Visibility fontSize="smaller" />
                  ) : (
                    <VisibilityOff fontSize="smaller" />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          variant="contained"
          onClick={() => props.login(login, password)}
        >
          Увійти
        </Button>
      </form>
      {props.loading && <div className={style.loader}><CircularProgress /></div>}
      {props.isLogined&&<div className={style.loader}><div className={style.thumb}><ThumbUpIcon/></div></div>}
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
  isLogined: PropTypes.bool
};

const mapStateToProps = (state) => ({
  loading: state.auth.login.loading,
  error: state.auth.login.error.code !== null,
  isLogined: !!state.auth.updateData.credencial.uid,
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: (Login, Password) => dispatch(login(Login, Password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);

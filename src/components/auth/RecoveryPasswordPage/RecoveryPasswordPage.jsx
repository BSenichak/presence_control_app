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
} from "@mui/material";
import Slide from "@mui/material/Slide";
import style from "./RecoveryPasswordPage.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export const RecoveryPasswodPage = (props) => {
  const [login, setLogin] = useState("");
  const [open, setOpen] = useState(false);
  const [alertText, setAlertText] = useState("");
  const [alertType, setAlertType] = useState("");

  useEffect(() => {
    if (props.error) {
      setOpen(true);
      setAlertText("Користувача з даною адресою не існує")
      setAlertType("error")
    }
  }, [props.error]);

  const noficationClose = () => {
    setOpen(false);
  };

  return (
    <div className={style.wrapper}>
      <img
        src="/Images/recoverypassword.svg"
        alt="Login"
        className={style.logo}
      />
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
        <Button variant="contained">Відновити пароль</Button>
      </form>
      {props.loading && (
        <div className={style.loader}>
          <CircularProgress />
        </div>
      )}
      {props.isLogined && (
        <div className={style.loader}>
          <div className={style.thumb}>
            <ThumbUpIcon />
          </div>
        </div>
      )}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={noficationClose}
        TransitionComponent={Slide}
      >
        <Alert
          onClose={noficationClose}
          severity={alertType}
          sx={{ width: "100%" }}
        >
          {alertText}
        </Alert>
      </Snackbar>
    </div>
  );
};

RecoveryPasswodPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  isLogined: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: state.auth.login.loading,
  error: state.auth.login.error.code !== null,
  isLogined: !!state.auth.updateData.credencial.uid,
});

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecoveryPasswodPage);

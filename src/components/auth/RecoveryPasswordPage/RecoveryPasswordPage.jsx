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
import { recoveryPassword } from "../../../store/auth/recoveryPasswod/recoveryPasswordActions";

export const RecoveryPasswodPage = (props) => {
  const [login, setLogin] = useState("");
  const [open, setOpen] = useState(false);
  const [alertText, setAlertText] = useState("error");
  const [alertType, setAlertType] = useState("warning");

  useEffect(() => {
    if (props.error) {
      setOpen(true);
      setAlertText("Користувача з даною адресою не існує");
      setAlertType("error");
    }
    if (props.isDone) {
      setOpen(true);
      setAlertText(`Лист відновлення надіслано на ${login}`);
      setAlertType("success");
    }
    // eslint-disable-next-line
  }, [props.error, props.isDone]);

  const noficationClose = () => {
    setOpen(false);
  };

  return (
    <div className={style.wrapper}>
      <img
        src="/Images/recoverypassword.svg"
        alt="Login"
        className={style.logo}
        onClick={()=>props.clog()}
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
        <Button
          variant="contained"
          onClick={() => {
            // eslint-disable-next-line
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(login)) {
              setOpen(true);
              setAlertText("Не вірно введена пошта");
              setAlertType("error");
            } else {
              props.resPass(login)
            }
          }}
        >
          Відновити пароль
        </Button>
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
  isDone: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: state.auth.recovery.loading,
  error: state.auth.recovery.error !== null,
  isDone: state.auth.recovery.done,
});

const mapDispatchToProps = (dispatch) => {
  return {
    resPass: (Login) => dispatch(recoveryPassword(Login)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecoveryPasswodPage);

import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Snackbar,
  Alert,
  Button,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Tooltip,
  Fade,
  Select,
  MenuItem,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import style from "./RegisterPage.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useNavigate } from "react-router-dom";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import LinearProgress from "@mui/material/LinearProgress";
import { register } from "../../../store/auth/register/registerActions";

export const RegisterPage = (props) => {
  const [name, setName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [root, setRoot] = useState("");
  const [password, setPassword] = useState("");
  const [repeadpassword, setRepeadPassword] = useState("");
  const [passOk, setPassOk] = useState(false);
  const [passComplexity, setPassComplexity] = useState(0);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (props.isLogined) {
      const t = setTimeout(() => {
        navigate("/");
        return clearTimeout(t);
      }, 2000);
    }
  }, [props.error, navigate, props.isLogined]);

  const passValodation = (e) => {
    let p = e.target.value;
    let compl = 0;
    if (p.length >= 8) {
      compl += 33.3;
    }
    if (p.length > 2 && new RegExp("([A-Z])").test(p)) {
      compl += 33.3;
    }
    if (p.length > 2 && new RegExp("([0-9])").test(p)) {
      compl += 33.3;
    }
    setPassComplexity(compl);
  };

  useEffect(() => {
    if (repeadpassword === password && passComplexity > 80) {
      setPassOk(true);
    } else {
      setPassOk(false);
    }
  }, [password, repeadpassword, passOk, setPassOk, passComplexity]);

  const checkAllData = () => {
    if (name.length < 3) {
      setErrorText("Ім'я занадто коротке");
      setOpen(true);
      return null;
    }
    if (secondName.length < 3) {
      setErrorText("Прізвище занадто коротке");
      setOpen(true);
      return null;
    }
    // eslint-disable-next-line
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrorText("Електронна пошта не вірна");
      setOpen(true);
      return null;
    }
    if (root.length < 3) {
      setErrorText("Не обрано категорію");
      setOpen(true);
      return null;
    }

    if (passComplexity < 90) {
      setErrorText("Пароль не відповідає умовам");
      setOpen(true);
      return null;
    }
    if (!passOk) {
      setErrorText("Пароль не збігається");
      setOpen(true);
      return null;
    }
    props.register(email, password, name, secondName, root);
  };

  return (
    <div className={style.wrapper}>
      <img src="/Images/registration.svg" alt="Login" className={style.logo} />
      <form>
        <FormControl variant="standard">
          <InputLabel htmlFor="firstName">Ім'я</InputLabel>
          <Input
            autoComplete="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="firstName"
            type="text"
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="secondName">Прізвище</InputLabel>
          <Input
            autoComplete="username"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)}
            id="secondName"
            type="text"
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="email">Електронна пошта</InputLabel>
          <Input
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
          />
        </FormControl>
        <FormControl fullWidth variant="standard">
          <InputLabel id="root">Категорія</InputLabel>
          <Select
            autoComplete="username"
            value={root}
            onChange={(e) => setRoot(e.target.value)}
            label="root"
          >
            <MenuItem value={"teacher"}>Вчитель</MenuItem>
            <MenuItem value={"student"}>Учень</MenuItem>
            <MenuItem value={"parent"}>Батько/Мати</MenuItem>
          </Select>
        </FormControl>
        <Tooltip
          title={
            <>
              Пароль має відповідати таким умовам
              <ul className={style.tooltip}>
                <li>Довжина більша 8 символів</li>
                <li>Хочаб 1 цифра</li>
                <li>Хочаб 1 велика буква</li>
              </ul>
            </>
          }
          arrow
          placement="bottom"
          TransitionComponent={Fade}
          style={{ maxWidth: "none" }}
        >
          <FormControl variant="standard" suggested="new-password">
            <InputLabel htmlFor="password">Пароль</InputLabel>
            <Input
              value={password}
              onChange={(e) => {
                passValodation(e);
                setPassword(e.target.value);
              }}
              autoComplete="new-password"
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
        </Tooltip>
        <LinearProgress
          variant="determinate"
          value={passComplexity}
          color={
            passComplexity > 80
              ? "success"
              : passComplexity > 50
              ? "warning"
              : passComplexity > 20
              ? "error"
              : "inherit"
          }
        />
        <FormControl
          variant="standard"
          error={!(passOk || repeadpassword.length === 0)}
          color={passOk ? "success" : "primary"}
        >
          <InputLabel htmlFor="repeadPassword">Повторити пароль</InputLabel>
          <Input
            autoComplete="new-password"
            value={repeadpassword}
            onChange={(e) => setRepeadPassword(e.target.value)}
            id="repeadPassword"
            type={!passwordVisibility ? "password" : "text"}
          />
        </FormControl>
        <Button variant="contained" onClick={() => checkAllData()}>
          Зареєструватись
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
        onClose={() => setOpen(false)}
        TransitionComponent={Slide}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errorText}
        </Alert>
      </Snackbar>
    </div>
  );
};

RegisterPage.propTypes = {
  loading: PropTypes.bool,
  login: PropTypes.func,
  error: PropTypes.bool,
  isLogined: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: state.auth.register.loading,
  error: state.auth.register.error !== null,
  isLogined: !!state.auth.updateData.credencial.uid,
});

const mapDispatchToProps = (dispatch) => {
  return {
    register: (email, password, firstName, secondName, root) =>
      dispatch(register(email, password, firstName, secondName, root)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);

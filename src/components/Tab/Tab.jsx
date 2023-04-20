import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { closeTab } from "../../store/tab/tabActions";
import style from "./Tab.module.scss";
import LogoutIcon from "@mui/icons-material/Logout";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import LoginIcon from "@mui/icons-material/Login";
import CreateIcon from "@mui/icons-material/Create";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Tab = (props) => {
  return (
    <Drawer anchor="right" open={props.isOpen} onClose={() => props.closeTab()}>
      <div className={style.wrapper}>
        <List>
          <ListItem className={style.avatarBar}>
            {props.isLogined ? (
              true ? (
                <Avatar sx={{ width: 100, height: 100 }}>
                  <AccountCircleIcon sx={{ width: 80, height: 80 }} />
                </Avatar>
              ) : (
                <Avatar
                  sx={{ width: 100, height: 100 }}
                  src="https://i.mycdn.me/i?r=AzG-Op5fjH6aT4_p-K-WOHnw2zQQRSIb9h6cOX5-5eSL-VOP0b4v_aZBicDVInGGoZs"
                />
              )
            ) : (
              <Avatar sx={{ width: 100, height: 100 }}>
                <NoAccountsIcon sx={{ width: 80, height: 80 }} />
              </Avatar>
            )}
          </ListItem>
          {props.isLogined ? (
            <ListItemButton>
              <ListItemIcon aria-label="LogoutIcon">
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Вийти з аккаунту" />
            </ListItemButton>
          ) : (
            <>
              <ListItemButton>
                <ListItemIcon aria-label="LoginIcon">
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="Увійти" />
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon aria-label="CreateIcon">
                  <CreateIcon />
                </ListItemIcon>
                <ListItemText primary="Зареєструватись" />
              </ListItemButton>
            </>
          )}
        </List>
      </div>
    </Drawer>
  );
};

Tab.propTypes = {
  isOpen: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isOpen: state.tab.tabState,
  isLogined: !!state.auth.updateData.credencial,
});

const mapDispatchToProps = (dispatch) => {
  return {
    closeTab: () => dispatch(closeTab()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tab);

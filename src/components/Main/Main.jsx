import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import style from "./Main.module.scss";
import { Link } from "react-router-dom";
import { loadClasses } from "../../store/main/mainActions";
import { CircularProgress, Skeleton } from "@mui/material";

export const Main = (props) => {
  const [render, setRender] = useState(true);
  if (render) {
    props.loadClasses();
    setRender(false);
  }
  return (
    <div className={style.wrapper}>
      {props.loading && (
        <div className={style.loader}>
          <CircularProgress />
        </div>
      )}
      <Link to={"#"} className={style.flat}>
        Загальна статистика
      </Link>
      {!props.loading
        ? props.classes.map((el) => (
            <Link className={style.item} to={`class?id=${el.uid}`} key={el.uid}>
              <div className={style.title}>{el.name}</div>
              <div className={style.year} style={{ backgroundColor: el.color, boxShadow: `0 -1rem 8rem ${el.color}` }}>
                {el.yearStart}-{el.yearEnd}
              </div>
            </Link>
          ))
        : [{},{} ,{} ,{} ,{} ,{} ,{}, {}].map(() => (
            <Link className={style.item}>
              <Skeleton variant="roundet" width={"100%"} height={"100%"}/>
            </Link>
          ))}

      <Link to={"#"} className={style.flat}>
        Архівні класи
      </Link>
    </div>
  );
};

Main.propTypes = {
  loadClasses: PropTypes.func,
  classes: PropTypes.array,
};

const mapStateToProps = (state) => ({
  classes: state.main.classes,
  loading: state.main.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadClasses: () => dispatch(loadClasses()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);

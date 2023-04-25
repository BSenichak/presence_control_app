import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import style from "./Main.module.scss";
import { Link } from "react-router-dom";
import { loadClasses } from "../../store/main/mainActions";

export const Main = (props) => {
  const [render, setRender] = useState(true);
  if (render) {
    props.loadClasses();
    setRender(false);
  }
  return (
    <div className={style.wrapper}>
      <Link to={"#"} className={style.flat}>
        Загальна статистика
      </Link>
      {!props.loading ? props.classes.map((el) => (
        <Link className={style.item} to={`class/${el.uid}`} key={el.uid}>
          <div className={style.title}>{el.name}</div>
          <div
            className={style.year}
            style={{ backgroundColor: el.color }}
          >
            {el.yearStart}-{el.yearEnd}
          </div>
        </Link>
      )):"ddd"}

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

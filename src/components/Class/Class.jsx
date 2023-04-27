import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import style from "./Class.module.scss";
import { loadClass } from "../../store/class/classAction";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export const Class = (props) => {
  const [render, setRender] = useState(true);
  const id = queryString.parseUrl(useLocation().search).query.id;
  if (render) {
    props.loadClass(id);
    setRender(false);
  }
  return (
    <div className={style.wrapper}>
      <div
        className={style.title}
        style={{ backgroundColor: props.data.color }}
      >
        <div>{props.data.name}</div>
        <div>
          {props.data.yearStart} - {props.data.yearEnd}
        </div>
      </div>
      {!props.loading ? (
        <TableContainer sx={"100%"} className={style.Table}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableCell>Дата</TableCell>
                <TableCell>Дата</TableCell>
              </TableHead>
              {props.data.students.map((student) => (
                <TableRow>
                  <TableCell>{student.name}</TableCell>
                  {props.data.mounth[0].pressent.map(el=><TableCell>{JSON.stringify(el)}</TableCell>)}
                </TableRow>
                
              ))}
            </Table>
          </TableContainer>
        </TableContainer>
      ) : (
        "sdsd"
      )}
    </div>
  );
};

Class.propTypes = {
  loadClass: PropTypes.func,
  data: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.any,
};

const mapStateToProps = (state) => ({
  data: state.class.data,
  loading: state.class.loading,
  error: state.class.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadClass: (id) => dispatch(loadClass(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Class);

import React from 'react'
import { connect } from 'react-redux'
import style from "./NotFound.module.scss"

export const NotFound = (props) => {
  return (
    <div className={style.wrapper}>
        <div className={style.number}>404</div>
        <div className={style.text}>Not Found</div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)
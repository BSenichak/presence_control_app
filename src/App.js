import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import LoginPage from "./components/auth/LoginPage/LoginPage"
import style from "./style/generalStyle.module.scss"

export const App = (props) => {
  return (
    <div className={style.wrapper}>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

App.propTypes = {
  first: PropTypes.any
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

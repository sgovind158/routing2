import React, { useContext } from 'react'
import {Link,useNavigate} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
import style from "./style.module.css"


const Navbar = () => {
  const navigate = useNavigate()
  const {isAuth,logout} = useContext(AuthContext)
  const onHandleLoginClick = ()=>{

    if(isAuth){
      logout()
    
    }else{
      navigate("/login")
    }
   
    // for login 
  }
  return (
    <div className={style.div1}>
      Navbar : 
      <Link to="">Home</Link>
      <Link to="/feeds">Feeds</Link>
      <Link to="/posts">posts</Link>
      <Link to="/careers">careers</Link>
      <button onClick={onHandleLoginClick}>  {isAuth ? "Logout":"Login"}</button>

    </div>
  )
}

export default Navbar

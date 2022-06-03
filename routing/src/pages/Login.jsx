import React ,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import style from "../componets/style.module.css"
import { AuthContext ,} from '../context/AuthContext'

const Login = () => {
  const navigate = useNavigate()
  const [loginCreads,setLoginCreads] = useState({})
  const {login} = useContext(AuthContext)
  const onChange = (e)=>{
    const {name, value} = e.target 

    setLoginCreads({
      ...loginCreads,
      [name] : value,
    })

  }

  const handleSubmit = (e)=>{
   e.preventDefault()
login()

  }
  return (
    <div>
      Login
      <form onSubmit={handleSubmit} className={style.form}>
        <input type="email" placeholder='enter your email'  name='email' onChange={onChange} />
        <input type="text" placeholder='enter your pass'  name='password'  onChange={onChange}/>
        <button type='submit'>Submit</button>
      </form>
      
    </div>
  )
}

export default Login

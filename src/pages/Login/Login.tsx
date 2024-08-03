import React from 'react'
import { MdPhoneIphone } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { CiLogin } from "react-icons/ci";

import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
	const navigate = useNavigate();
  return (
    <>
	{/* <Navbar/> */}
  <div className="container login">
	<div className="screen">
		<div className="screen__content">
			<form className="login">
				<div className="login__field">
          <MdPhoneIphone />
					<input type="text" className="login__input" placeholder="phone number" />
				</div>
				<div className="login__field">
         <MdOutlinePassword />
         <input type="password" className="login__input" placeholder="Password" />
				</div>
				<button className="button login__submit" onClick={()=>navigate('/user')}>
					<span className="button__text">Log In Now</span>
          <CiLogin/>
				</button>				
			</form>
			<div className="social-login">
				<h6>I don't have account </h6>
				<div className="social-icons">
					<Link to="/register" className="social-login__icon fab fa-instagram">register</Link>
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
    </>

  )
}

export default Login
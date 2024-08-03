import React from 'react'
import { MdPhoneIphone } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
const Register = () => {
	const navigate = useNavigate();
	return (
		<>
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
							<div className="login__field">
								<MdOutlinePassword />
								<input type="password" className="login__input" placeholder="confirm password" />
							</div>
							<button className="button login__submit" onClick={()=>navigate('/user/info/add')}>
								<span className="button__text">Register Now</span>
								<CiLogin />
							</button>
						</form>
						<div className="social-register">
							<h6>I have account </h6>
							<div className="social-icons">
								<Link to="/login" className="social-login__icon fab fa-instagram">login</Link>
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

export default Register
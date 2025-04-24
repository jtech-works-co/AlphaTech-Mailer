import * as React from "react";
import { useNavigate } from "react-router-dom";

const Landing: React.FC = () => {

	const navigate = useNavigate();

	return (
		<div className="landing">
			<div className="content">

				<h1 className="title">AlphaTech Mailer</h1>

				<div className="actions-container">
					<button onClick={() => navigate('/auth/register')} className="primary">Get Started</button>
					<button onClick={() => navigate('/auth/login')} className="secondary">Log In</button>
				</div>
			</div>
		</div>
	);
}

export default Landing;
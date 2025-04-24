import * as React from "react";
import { useParams } from "react-router-dom";

const SignUpForm: React.FC = () => {
	return (
		<form>
			<h1>Sign Up</h1>
		</form>
	);
}

const Auth: React.FC = () => {
	const { mode } = useParams<{ mode: string }>();
	const [ui, setUi] = React.useState<React.ReactNode>(<h1></h1>);

	React.useEffect(() => {
		if (mode === 'register') {
			setUi(
				<SignUpForm />
			);
		}
	}, [mode]);

	return (
		<div className="auth">
			{ui}
		</div>
	);
}

export default Auth;
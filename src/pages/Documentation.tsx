import * as React from "react";
import CodePreview from "../components/CodePreview";

const Documentation: React.FC = () => {
	return (
		<div className="documentation">
			<section>
				<h1>1</h1>
				<h3>Install NPM</h3>
				<CodePreview code="$ npm i alphatech-mailer" language="shell-session" />
			</section>
		</div>
	);
}

export default Documentation;
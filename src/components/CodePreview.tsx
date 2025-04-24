import * as React from "react";
import Prism from 'prismjs';
import 'prismjs/themes/prism-twilight.css';

// ✅ Import additional languages
import 'prismjs/components/prism-batch'; // for "bat"
import 'prismjs/components/prism-shell-session'; // for "shell-session"

export type CodePreviewProps = {
	code: string;
	language: "html" | "javascript" | "jsx" | "tsx" | "typescript" | "bat" | "shell-session";
};

const getSyntax = ({ code, language }: CodePreviewProps) => {
	return Prism.highlight(code, Prism.languages[language], language);
};


const CodePreview: React.FC<CodePreviewProps> = ({ code, language }) => {
	const [copied, setCopied] = React.useState(false);

	const handleCopy = async () => {
		try {
			if (language === 'shell-session') {
				if (code.startsWith("$ ")) {
					code = code.replace("$ ", '');
				}
			}
			await navigator.clipboard.writeText(code);
			setCopied(true);
			setTimeout(() => setCopied(false), 1500);
		} catch (err) {
			console.error("Failed to copy!", err);
		}
	};

	return (
		<pre className="code-preview">
			<button className="copy" onClick={handleCopy}>
				{copied ? "Copied!" : "Copy"}
			</button>
			<code
				className={`language-${language}`}
				dangerouslySetInnerHTML={{ __html: getSyntax({ code, language }) }}
			/>
		</pre>
	);
};

export default CodePreview;
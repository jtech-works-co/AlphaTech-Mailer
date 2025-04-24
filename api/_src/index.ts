import nodemailer, { type SendMailOptions } from 'nodemailer';
import { MAILER_PASS, MAILER_USER } from './config/env.js';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	// Enable CORS: Allow all origins and specify allowed methods
	res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all URLs
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow specific methods
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers

	if (req.method === 'OPTIONS') {
		return res.status(200).end();
	}

	if (req.method !== 'POST') { 
		return res.status(405).json({ message: 'Method Not Allowed' });
	}

	const { to, from, subject, html, sender } = {
		to: 'ostaralover2003@gmail.com',
		from: 'ostaralover2003@gmail.com',
		subject: 'Test Email',
		html: '<p>This is a test email</p>',
		sender: 'Ostara Lover',
	};

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		secure: false,
		auth: {
			user: MAILER_USER,
			pass: MAILER_PASS,
		},
	});

	const formattedTo: string = to
		? sender
			? `${sender} <${to}>`
			: to.toString()
		: '';

	const mailOptions: SendMailOptions = {
		to: formattedTo,
		from,
		subject,
		html,
	};

	try {
		const info = await transporter.sendMail({
			...mailOptions,
			to: formattedTo,
			from: from || MAILER_USER,
			subject: subject || 'No Subject',
			html: html || '<p>No content</p>',
		});

		console.log('Message sent: %s', info.messageId);
		return res.status(200).json({ message: 'Email sent successfully' });
	} catch (error: any) {
		console.error('Error sending email:', error);
		return res.status(error.status || 500).json({
			message: error.message || 'Internal Server Error',
		});
	}
};

export default handler;

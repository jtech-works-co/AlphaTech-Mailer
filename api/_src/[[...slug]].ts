import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
	return res.status(200).json({
		url: req.url
	});
}

export default handler;
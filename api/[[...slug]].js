const handler = (req, res) => {
    const path = req.url?.split('/api/')[1].split('?')[0];
    return res.status(200).json({
        message: path + " is a dynamic route",
    });
};
export default handler;

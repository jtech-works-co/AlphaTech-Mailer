const handler = (req, res) => {
    return res.status(200).json({
        url: req.url
    });
};
export default handler;

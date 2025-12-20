module.exports = (req, res) => {
    res.status(200).json({
        message: 'pong',
        version: '3.0',
        timestamp: new Date().toISOString()
    });
};

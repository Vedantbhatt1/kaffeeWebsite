export default (req, res) => {
    res.status(200).json({
        message: 'pong',
        version: '4.0 (ESM)',
        timestamp: new Date().toISOString()
    });
};

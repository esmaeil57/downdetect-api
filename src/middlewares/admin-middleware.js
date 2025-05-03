const { authenticateToken } = require('./auth-middleware');

function adminMiddleware(req, res, next) {
  authenticateToken(req, res, () => {
    if (req.user?.role !== 'admin') {
      return res.status(403).json({ message: 'Forbidden: Admins only' });
    }
    next();
  });
}

module.exports = adminMiddleware;

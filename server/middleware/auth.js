/**
 * Authentication & Authorization Middleware
 * 
 * Provides JWT-based authentication and role-based access control
 * for the Village Vignani API.
 */

import jwt from 'jsonwebtoken';

/**
 * authenticate - Verifies JWT token from the Authorization header.
 * Attaches decoded user payload to req.user on success.
 * Returns 401 if no token is provided or token is invalid/expired.
 */
export const authenticate = (req, res, next) => {
  try {
    // Extract token from "Bearer <token>" format
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No authentication token provided.'
      });
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. Invalid token format.'
      });
    }

    // Verify token using the JWT_SECRET from environment variables
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Authentication error:', error.message);
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token.'
    });
  }
};

/**
 * requireAdmin - Checks that the authenticated user has an 'admin' role.
 * Must be used AFTER the authenticate middleware.
 * Returns 403 if the user is not an admin.
 */
export const requireAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Access denied. Admin privileges required.'
    });
  }
  next();
};

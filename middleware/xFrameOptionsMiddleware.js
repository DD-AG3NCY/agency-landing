// xFrameOptionsMiddleware.js

export default function xFrameOptionsMiddleware(handler) {
    return (req, res) => {
      // Add X-Frame-Options header
      res.setHeader('X-Frame-Options', 'DENY');
  
      // Pass request to the next handler
      return handler(req, res);
    };
  }
  
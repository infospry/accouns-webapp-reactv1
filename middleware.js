// middleware.js

function myMiddleware(req, res, next) {
  // Perform some custom logic here
  console.log('Middleware executed');
  next(); // Call next() to pass control to the next middleware or the page's getServerSideProps.
}

module.exports = myMiddleware;

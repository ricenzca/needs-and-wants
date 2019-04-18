module.exports = (allModels) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let authenticateUser = (request, response, next) => {

    const username = request.cookies.username;
    const loggedIn = request.cookies.loggedIn;

    if (username && loggedIn) {
      const SALT = 'catsanddogs';
      const sha256 = require('js-sha256');
      const hashUserName = sha256(username);

      if (hashUserName === loggedIn) {
        next();
      } else {
        response.status(401).render('./unauthorised');
      }
      
    } else {
      response.status(401).render('./unauthorised');;    
    } 
  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    authenticateUser: authenticateUser
  };

}

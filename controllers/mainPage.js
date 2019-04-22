module.exports = (allModels) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
  
  
  let mainPageRequestHandler = (request, response) => {

    const username = request.cookies.username;
    const loggedIn = request.cookies.loggedIn;

    if (username && loggedIn) {

      const SALT = 'catsanddogs';
      const sha256 = require('js-sha256');
      const hashUserName = sha256(SALT + username);

      if (hashUserName === loggedIn) {
        //if user is logged in,
        //direct user to personal home page

        const usernameCallback = () => {
          return username;
        }

        const resultCallback = (result) => {
          // console.log("mainPage controller: ");
          // console.log(result);
          response.redirect(`/user/${username}`);
        }
        allModels.mainPageModelsObject.mainPageModelFunction(usernameCallback, resultCallback);

      } else {
        //if cookie values are not correct
        response.status(401).render('unauthorised');
      }

    } else {
      //user is not logged in
      response.render('mainPage'); 
    }

  };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    mainPageRequestHandler: mainPageRequestHandler
  };

}

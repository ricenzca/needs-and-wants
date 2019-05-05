module.exports = (allModels) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let logoutRequestHandler = (request, response) => {
    const cookie = request.cookies;
    console.log("logout Controller")
    // console.log("cookie");
    // console.log(cookie);
    for (var prop in cookie) {
        if (!cookie.hasOwnProperty(prop)) {
            continue;
        }    
        response.cookie(prop, '', {expires: new Date(0)});
    }
    response.redirect('/login');
  };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    logoutRequestHandler: logoutRequestHandler
  };

}

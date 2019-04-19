module.exports = (allModels) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let userHomeRequestHandler = (request, response) => {
    const username = request.cookies.username;
    const loggedIn = request.cookies.loggedIn;

    if (username && loggedIn) {

      const SALT = 'catsanddogs';
      const sha256 = require('js-sha256');
      const hashUserName = sha256(SALT + username);

      if (hashUserName === loggedIn) {

          const data = {
            username: username
          };

          const userHomeCallback = (listExpenseResult, getMonthlyExpenseResult) => {
            console.log("userHome userHomeCallback listExpenseResult\n",listExpenseResult);
            console.log("userHome userHomeCallback getMonthlyExpenseResult\n", getMonthlyExpenseResult);
            response.cookie('monthlyExpense', JSON.stringify(getMonthlyExpenseResult));
            response.render('userHome', {listExpenseResult: listExpenseResult});
          }

          allModels.userHomeModelsObject.userHomeModelFunction(data, userHomeCallback);
          
      } else {
        response.status(401).render('./unauthorised');
      }

    } else {
      response.status(401).render('./unauthorised');
    }
  };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    userHomeRequestHandler: userHomeRequestHandler
  };

}

module.exports = (allModels) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let testRequestHandler = (request, response) => {
    console.log("request query");
    console.log(request.query.chosenPeriod);
    // const username = request.cookies.username;
    // const loggedIn = request.cookies.loggedIn;

    // if (username && loggedIn) {

    //   const SALT = 'catsanddogs';
    //   const sha256 = require('js-sha256');
    //   const hashUserName = sha256(SALT + username);

    //   if (hashUserName === loggedIn) {

          // const data = {
          //   username: username
          // };

          // const testCallback = (listExpenseResult, MonthlyExpenseResult, CategorizedExpenseResult) => {
          //   console.log("testController testCallback listExpenseResult\n",listExpenseResult);
          //   console.log("testController testCallback MonthlyExpenseResult\n", MonthlyExpenseResult);
          //   response.cookie('monthlyExpense', JSON.stringify(MonthlyExpenseResult));
          //   response.cookie('categorizedExpense', JSON.stringify(CategorizedExpenseResult));
          //   response.render('userHome', {listExpenseResult: listExpenseResult});
          // }

          // allModels.testModelsObject.testModelFunction(data, testCallback);

          response.send('successful!');
          
    //   } else {
    //     response.status(401).render('./unauthorised');
    //   }

    // } else {
    //   response.status(401).render('./unauthorised');
    // }
  };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    testRequestHandler: testRequestHandler
  };

}

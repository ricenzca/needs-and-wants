module.exports = (allModels) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let testRequestHandler = (request, response) => {
    console.log(request.query)
    const username = request.query.username;
    const loggedIn = request.cookies.loggedIn;
    const chosenPeriod = request.query.chosenPeriod;

    // if (username && loggedIn) {

    //   const SALT = 'catsanddogs';
    //   const sha256 = require('js-sha256');
    //   const hashUserName = sha256(SALT + username);

    //   if (hashUserName === loggedIn) {

          const data = {
            username: username,
            chosenPeriod: chosenPeriod
          };

          const testCallback = (chosenPeriodString, listExpenseResult) => {
            // console.log("test testCallback listExpenseResult\n",listExpenseResult);
            // console.log("test testCallback MonthlyExpenseResult\n", MonthlyExpenseResult);
            // response.cookie('monthlyExpense', JSON.stringify(MonthlyExpenseResult));
            // response.cookie('categorizedExpense', JSON.stringify(CategorizedExpenseResult));

            // chosenPeriodString = JSON.stringify(chosenPeriodString);
            // console.log("JSON chosenPeriodString");
            // console.log(chosenPeriodString);

            // listExpenseResult = JSON.stringify(listExpenseResult);
            // console.log("JSON listExpenseResult");
            // console.log(listExpenseResult);

            let object = JSON.stringify({chosenPeriodString: chosenPeriodString, listExpenseResult: listExpenseResult});
            response.status(200).send(object);
          }

          allModels.testModelsObject.testModelFunction(data, testCallback);
          
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

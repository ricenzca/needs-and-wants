module.exports = (allModels) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let submitExpenseRequestHandler = (request, response) => {
    const username = request.cookies.username;
    const loggedIn = request.cookies.loggedIn;

    if (username && loggedIn) {

      const SALT = 'catsanddogs';
      const sha256 = require('js-sha256');
      const hashUserName = sha256(SALT + username);

      if (hashUserName === loggedIn) {

        const submitExpenseCallback = (expenseCategory) => {
          response.render('./submitExpenseForm', {username: username, expenseCategory: expenseCategory});  
        };
        
        allModels.expenseModelsObject.submitExpenseModelFunction(submitExpenseCallback);
          
      } else {
        response.status(401).render('./unauthorised');
      }

    } else {
      response.status(401).render('./unauthorised');
    }
  }

  let updateExpenseRequestHandler = (request, response) => {
    
    const userInput = Object.values(request.body);
    const username = request.cookies.username;

    const data = {
      userInput: userInput,
      username: username
    }    
    
    const updateExpenseCallback = (result) => {
      response.redirect(`/user/${username}`);
    }

    allModels.expenseModelsObject.updateExpenseModelFunction(data, updateExpenseCallback);

  };



  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    submitExpenseRequestHandler: submitExpenseRequestHandler,
    updateExpenseRequestHandler: updateExpenseRequestHandler
  };

}

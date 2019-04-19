module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *  =====            ROUTES             =====
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller

  const registerController = require('./controllers/register')(allModels);
  app.get('/register', registerController.registerRequestHandler);
  app.post('/register', registerController.registerControllerCallback);

  const loginController = require('./controllers/login')(allModels);
  app.get('/login', loginController.loginRequestHandler);
  app.post('/login', loginController.loginControllerCallback);

  const logoutController = require('./controllers/logout')(allModels);
  app.post('/logout', logoutController.logoutRequestHandler);

  const userHomeController = require('./controllers/userHome')(allModels);
  app.get('/:username', userHomeController.userHomeRequestHandler);
  
  const expenseController = require('./controllers/expenseController')(allModels);
  app.get('/:username/expense/new', expenseController.submitExpenseRequestHandler);
  app.post('/:username/expense', expenseController.updateExpenseRequestHandler);

  const mainPageController = require('./controllers/mainPage')(allModels);
  app.get('/', mainPageController.mainPageRequestHandler);
};

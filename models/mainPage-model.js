/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let mainPage = (usernameCallback, resultCallback) => {
    console.log("mainPage model");
    let username = usernameCallback();

    let queryString = `SELECT * from users where username='${username}';`;

    dbPoolInstance.query(queryString, (error, result) => {
      if (error) {
        console.log("mainPage model query error", error);
      } else {

        // invoke callback function with results after query has executed
        console.log("mainPage model result.rows: ");
        console.log(result.rows);
        resultCallback(result.rows);

      }
    });
  };

  return {
    mainPageModelFunction : mainPage
  };
};

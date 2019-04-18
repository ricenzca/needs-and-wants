/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getUserExpense = (data, userHomeCallback) => {

    let queryString = `SELECT *, expenses.id FROM expenses INNER JOIN users ON (expenses.user_id=users.id) WHERE users.username='${data.username}';`;

    dbPoolInstance.query(queryString, (error, result) => {
      if (error) {

       console.log("getUserExpense select query error", error);

      } else {

        let queryString = `SELECT * FROM expenses WHERE user_id='${result.rows[0].id}';`;

        dbPoolInstance.query(queryString, (error, result) => {
          if (error) {

           console.log("getUserExpense select query error", error);

          } else {

            // invoke callback function with results after query has executed
            console.log("getUserExpense select result.rows: ");
            userHomeCallback(result.rows);
          }
        });
      }
    });
  };

  return {
    userHomeModelFunction : getUserExpense,
  };
};

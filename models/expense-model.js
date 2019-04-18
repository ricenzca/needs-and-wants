/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let logUserExpense = (data, updateExpenseCallback) => {

    let queryString = `SELECT * FROM users WHERE username='${data.username}';`;

    dbPoolInstance.query(queryString, (error, result) => {
      if (error) {

       console.log("expenseModel logUserExpense select query error", error);

      } else {

        let queryString = `INSERT INTO expenses (amount, need_want, date, comments, user_id) VALUES ($1,$2,$3,$4, ${result.rows[0].id}) RETURNING id;`;
        const values = data.userInput;
        console.log("expenseModel values",values)

        dbPoolInstance.query(queryString, values, (error, result) => {
          if (error) {

           console.log("getUserExpense select query error", error);

          } else {

            // invoke callback function with results after query has executed
            console.log("expenseModel logUserExpense result.rows: ");
            console.log(result.rows);

            updateExpenseCallback(result.rows);

          }
        });
      }
    });
  };

  return {
    expenseModelFunction : logUserExpense
  };
};

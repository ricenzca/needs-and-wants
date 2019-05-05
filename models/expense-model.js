/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getExpenseCategory = (submitExpenseCallback) => {

    let queryString = `SELECT * FROM expense_category;`;

    dbPoolInstance.query(queryString, (error, result) => {
      if (error) {

       console.log("expenseModel getExpenseCategory select query error", error);

      } else {

            // console.log("expenseModel getExpenseCategory result.rows: ");
            // console.log(result.rows);

            submitExpenseCallback(result.rows);
      }
    });
  }


  let logUserExpense = (data, updateExpenseCallback) => {

    let queryString = `SELECT * FROM users WHERE username='${data.username}';`;

    dbPoolInstance.query(queryString, (error, result) => {
      if (error) {

       console.log("expenseModel logUserExpense select query error", error);

      } else {

        let queryString = `INSERT INTO expenses (amount, need_want, date, category, comments, user_id) VALUES ($1,$2,$3,$4,$5, ${result.rows[0].id}) RETURNING id;`;
        const values = data.userInput;
        console.log("expenseModel values",values)

        dbPoolInstance.query(queryString, values, (error, result) => {
          if (error) {

           console.log("logUserExpense insert query error", error);

          } else {

            // console.log("expenseModel logUserExpense result.rows: ");
            // console.log(result.rows);

            updateExpenseCallback(result.rows);

          }
        });
      }
    });
  };

  return {
    submitExpenseModelFunction : getExpenseCategory,
    updateExpenseModelFunction : logUserExpense
  };
};

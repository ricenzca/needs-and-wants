/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getUserExpense = (data, userHomeCallback) => {

    let queryString = `
                      SELECT *
                      FROM expenses
                      INNER JOIN users
                      ON expenses.user_id=users.id
                      WHERE users.username='${data.username}'
                      AND date_trunc('day', date) > (current_date - INTERVAL '30 days')
                      ORDER BY expenses.date DESC
                      ;`;

    dbPoolInstance.query(queryString, (error, result) => {
      if (error) {

       console.log("getUserExpense select query error", error);

      } else {

        let listExpenseResult = result.rows;

        let userId = result.rows[0].id;

        let queryString = `SELECT to_char(date_trunc('month', date), 'Mon-YYYY') AS expense_month,
                           SUM(amount) AS monthly_sum
                           FROM expenses WHERE user_id='${userId}' AND
                           date_trunc('month', date) > (current_date - INTERVAL '12 months')
                           GROUP BY date_trunc('month',date);`;

        dbPoolInstance.query(queryString, (error, result) => {
          if (error) {

           console.log("getMonthlyExpense select query error", error);

          } else {
            let monthlyExpenseResult = result.rows;
            // invoke callback function with results after query has executed
            console.log("getMonthlyExpense select result.rows: ");
            userHomeCallback(listExpenseResult, monthlyExpenseResult);
          }
        });
      }
    });
  };

  return {
    userHomeModelFunction : getUserExpense,
  };
};

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let getUserExpense = (data, userHomeCallback) => {

    let durationQueryString = "";
    let chosenPeriodString = "";

    if (data.chosenPeriod === "60" || data.chosenPeriod === "90") {
                  
        durationQueryString = `date_trunc('day', date) > (current_date - INTERVAL '${data.chosenPeriod} days')`;
        chosenPeriodString = `(past ${data.chosenPeriod} days)`;

    } else {

        durationQueryString = `date_trunc('day', date) > (current_date - INTERVAL '30 days')`;
        chosenPeriodString = `(past 30 days)`;
    }

    let queryString = `
                      SELECT amount, user_id, date, category, comments, users.id, username, need_want
                      FROM expenses
                      INNER JOIN users
                      ON expenses.user_id=users.id
                      WHERE users.username='${data.username}'
                      AND ${durationQueryString}
                      ORDER BY expenses.date DESC
                      ;`;

    dbPoolInstance.query(queryString, (error, result) => {
      if (error) {

       console.log("listExpenseResult select query error", error);

      } else {

        let listExpenseResult = result.rows;
        // console.log("listExpenseResult");
        // console.log(listExpenseResult);

        let userId = result.rows[0].id;

        let queryString = `
                          SELECT to_char(date_trunc('month', date), 'Mon-YYYY') 
                          AS expense_month,
                          need_want,
                          SUM(amount) AS monthly_sum
                          FROM expenses WHERE user_id='${userId}'
                          AND date_trunc('month', date) > (current_date - INTERVAL '12 months')
                          GROUP BY date_trunc('month',date), need_want
                          ORDER BY need_want, date_trunc('month',date)
                          ;`;

        dbPoolInstance.query(queryString, (error, result) => {
          if (error) {

           console.log("monthlyExpenseResult select query error", error);

          } else {
            let monthlyExpenseResult = result.rows;
            // console.log("monthlyExpenseResult");
            // console.log(monthlyExpenseResult);
            
            let queryString = `
                              SELECT to_char(date_trunc('month', date), 'Mon-YYYY') 
                              AS expense_month,
                              category,
                              SUM(amount) AS monthly_sum
                              FROM expenses WHERE user_id='${userId}'
                              AND date_trunc('month', date) > (current_date - INTERVAL '1 month')
                              GROUP BY date_trunc('month', date), category
                              ORDER BY SUM(amount) DESC
                              ;`;

            dbPoolInstance.query(queryString, (error, result) => {
              if (error) {

               console.log("CategorizedExpenseResult select query error", error);

              } else {
                let CategorizedExpenseResult = result.rows;
                // console.log("CategorizedExpenseResult");
                // console.log(CategorizedExpenseResult);

                // invoke callback function with results after query has executed
                userHomeCallback(chosenPeriodString, listExpenseResult, monthlyExpenseResult, CategorizedExpenseResult);
              }
            });
          }
        });
      }
    });
  };

  return {
    userHomeModelFunction : getUserExpense,
  };
};

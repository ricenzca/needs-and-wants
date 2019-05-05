const moment = require("moment");
const React = require("react");
const Header = require("./header-template");

class UserHome extends React.Component {
  render() {
    console.log("userHome jsx");

    const listExpenseResult = this.props.listExpenseResult;
    // console.log("listExpenseResult");
    // console.log(listExpenseResult);

    const chosenPeriodString = this.props.chosenPeriodString;
    
    const tableBodyContents = listExpenseResult.map(item => {
      let formattedDate = moment(item.date).format('YYYY-MM-DD');
      return (
          <tr>
            <td>{formattedDate}</td>
            <td>{item.amount}</td>
            <td style={{textTransform: 'capitalize'}}>{item.need_want}</td>
            <td style={{textTransform: 'capitalize'}}>{item.category}</td>
            <td style={{textTransform: 'capitalize'}}>{item.comments}</td>
          </tr>        
      );
    })

    const username = listExpenseResult[0].username;
    const logExpensePath = `/user/${username}/expense/new`;

    const logoutPath = `/logout`;

    // const listExpensePath = `/user/${username}`;
    const listExpensePath = `/test/${username}`;

    return (
      <html>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
          <link rel="stylesheet" type="text/css" href="../stylesheets/header-template.css" />
          <link rel="stylesheet" type="text/css" href="../stylesheets/userHome.css" />
          <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
          <script type="text/javascript" src="../scripts/chartjs-plugin-colorschemes.js"></script>
          <script type="text/javascript" src="../scripts/script.js" crossOrigin="anonymous"></script>
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
        </head>
        
        <body>
          <Header username={username} logoutPath={logoutPath} />
          
          <main>
          <h4>Expenses Dashboard</h4>
            <div class="chart-container">
              <canvas id="categorizedExpenseChart" width="400" height="400"></canvas>
            </div>

            <div class="chart-container">
              <canvas id="monthlyExpenseBarChart" width="400" height="400"></canvas>
            </div>

          

          <div>
            <h4 id="table-title">Expense Records {chosenPeriodString}</h4>
            <table>
              <thead>
                <tr>
                  <th>Expense date</th>
                  <th>Amount</th>
                  <th>Need / Want</th>
                  <th>Category</th>
                  <th>Comments</th>
                </tr>
              </thead>
              <tbody id="tbody">
              {tableBodyContents}
              </tbody>
            </table>
          </div>
          </main>
          
          <div id="buttons-container">
            <div class="button">
              <form method="get" action={logExpensePath}>
                <input class="btn btn-outline-success my-2 my-sm-0 font-weight-bold" type="submit" value="Log new expense"/>
              </form>
            </div>
            <div class="button">
              <form method="get" action="#">
                <input class="btn btn-outline-success my-2 my-sm-0 font-weight-bold" type="submit" value="Edit/Delete expense"/>
              </form>
            </div>
            <div class="button">
              <form method="get" action={listExpensePath}>
                <input id="input" type="hidden" value={username} name="username" />
                <select id="select" class="custom-select text-success my-2 my-sm-0 font-weight-bold" name="chosenPeriod">
                  <option selected="selected">Select period</option>
                  <option value="30">Last 30 days</option>
                  <option value="60">Last 60 days</option>
                  <option value="90">Last 90 days</option>
                </select>
                <input id="submit" type="submit" style={{visibility:"hidden"}} value="submit" />
                <noscript><input id="submit" type="submit" value="submit" /></noscript>
              </form>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = UserHome;

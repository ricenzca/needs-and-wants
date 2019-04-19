var moment = require('moment');
var React = require("react");

class UserHome extends React.Component {
  render() {
    console.log("userHome jsx");

    const listExpenseResult = this.props.listExpenseResult;
    console.log("listExpenseResult");
    console.log(listExpenseResult);
    
    const table = listExpenseResult.map(item => {
      let formattedDate = moment(item.date).format('YYYY-MM-DD');
      return (
        <tbody>
          <tr>
            <td>{formattedDate}</td>
            <td>{item.amount}</td>
            <td style={{textTransform: 'capitalize'}}>{item.need_want}</td>
            <td style={{textTransform: 'capitalize'}}>{item.comments}</td>
          </tr>
        </tbody>
      );
    })
    const path = `/${listExpenseResult[0].username}/expense/new`;
    console.log(path);

    return (
      <html>
        <head>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <script src="./scripts/script.js"></script>
        </head>
        <body style={{textAlign: 'left'}}>
          <form method="get" action={path} style={{position: 'absolute', right: '20px', zIndex: '1'}}>
           <input type="submit" value="Log new expense"/>
          </form>
          <h3 style={{margin: '10px 5px', position: 'relative', top: '0'}}>Expense Records</h3>
          <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <table>
              <thead>
                <tr>
                  <th>Expense date</th>
                  <th>Amount</th>
                  <th>Need/Want</th>
                  <th>Comments</th>
                </tr>
              </thead>
              {table}
            </table>
            <div style={{width: '400px'}}>
            <canvas id="myChart" width="400" height="400"></canvas>
            </div>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = UserHome;

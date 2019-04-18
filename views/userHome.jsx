var moment = require('moment');
var React = require("react");

class UserHome extends React.Component {
  render() {
    console.log("userHome jsx: ");

    const result = this.props.result;
    console.log(result);
    
    const table = result.map(item => {
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

    const path = `/${result[0].username}/expense/new`;

    return (
      <html>
        <head />
        <body style={{textAlign: 'left'}}>
          <form method="get" action={path}>
           <input type="submit" value="Log expense"/>
          </form>
          <h3 style={{margin: '0 5px', position: 'relative', top: '0'}}>Expense Records</h3>
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
        </body>
      </html>
    );
  }
}

module.exports = UserHome;

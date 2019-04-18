var React = require("react");

class UserHome extends React.Component {
  render() {
    console.log("userHome jsx: ");

    const username = this.props.username;
    const postPath = `/${username}`

    return (
      <html>
        <head />
        <body style={{textAlign: 'left'}}>
          <h3 style={{display: 'inline-block', margin: '0 5px', position: 'relative', top: '0'}}>Expense submitted! Do you want to log another expense?</h3>
          <div className="button-container" style={{display: 'inline-block'}}>
            <form className="button" method="get" action={postPath} style={{display: 'inline-block'}}>
              <input type="submit" value="Yes" />
            </form>
          </div>
          
          </form>
        </body>
      </html>
    );
  }
}

module.exports = UserHome;

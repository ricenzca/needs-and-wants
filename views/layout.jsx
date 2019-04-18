var React = require("react");

class Header extends React.Component {
  render() {
    console.log("Layout jsx: ");

    return (
      <header>
          <nav>
            <a href=""><img id="logo" src="./logo_transparent.png" width="100px"/></a>
            <a href="">Expenses</a>
            <a href="">Savings</a>
            <a href="">Target</a>
          </nav>
          <div className="button-container">
            <form className="button" method="get" action="/login">
              <input type="submit" value="Log out" />
            </form>
          </div>
      </header>
    );
  }
}

module.exports = Header;

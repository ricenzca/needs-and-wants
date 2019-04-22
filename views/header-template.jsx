var React = require("react");

class Header extends React.Component {
  render() {
    console.log("Header template jsx: ");

    const expensePath = `/user/${this.props.username}`;

    return (
      <header>
          <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light font-weight-bold">
            <a class="navbar-brand" href="/"><img id="logo" src="/images/Logo-scale.png" alt="Needs and Wants logo" /></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-3 mr-auto">
                <li class="nav-item mr-3">
                  <a class="nav-link" href={expensePath}>Expenses</a>
                </li>
                <li class="nav-item mr-3">
                  <a class="nav-link" href="#">Savings</a>
                </li>
                <li class="nav-item mr-3">
                  <a class="nav-link" href="#">Target</a>
                </li>
              </ul>
              <form className="button" method="post" action={this.props.logoutPath}>
              <input class="btn btn-outline-success my-2 my-sm-0 font-weight-bold" type="submit" value="Log out" />
            </form> 
            </div>
          </nav>       
      </header>
    );
  }
}

module.exports = Header;

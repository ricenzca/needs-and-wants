var React = require("react");

class MainPage extends React.Component {
  render() {
    console.log("MainPage jsx: ");

    return (
      <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="Expense, savings, financial planning tool" />
        <meta name="author" content="T.SHL" />
        <title>Needs & Wants</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="home.css" />
      </head>
      <body>
          <header style={{display: 'flex'}}>
              <nav style={{display: 'inline-block'}}>
                <a href="/"><img id="logo" src="./logo_transparent.png" width="100px"/></a>
                <a href="#what">What are we?</a>
                <a href="#how">Getting started</a>
              </nav>
              <div className="button-container" style={{display: 'inline-block'}}>
                <form className="button" method="get" action="/login" style={{display: 'inline-block'}}>
                  <input type="submit" value="Log in" />
                </form>
                <form className="button" method="get" action="/register" style={{display: 'inline-block'}}>
                  <input type="submit" value="Sign Up" />
                </form>
              </div>
          </header>
        <div className="page">
          <h1 id="what">What are we?</h1>
        </div>
        <div className="page">
          <h1 id="how">Getting Started</h1>
        </div>
      </body>
      </html>
    );
  }
}

module.exports = MainPage;

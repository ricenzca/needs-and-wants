const React = require("react");

class MainPage extends React.Component {
  render() {
    console.log("MainPage jsx: ");

    return (
      <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="Expense, savings, financial planning tool" />
        <meta name="author" content="T.SHL" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Needs & Wants</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="./stylesheets/home.css" />
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </head>
      <body>
          <header>
              <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light font-weight-bold">
                <a class="navbar-brand" href="/"><img id="logo" src="./images/Logo-scale.png" alt="Needs and Wants logo" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav ml-3 mr-auto">
                    <li class="nav-item mr-3">
                      <a class="nav-link" href="#what-container">What are we?</a>
                    </li>
                    <li class="nav-item mr-3">
                      <a class="nav-link" href="#how-container">Getting started</a>
                    </li>
                  </ul>
                  <form class="button mr-2" method="get" action="/login">
                    <input class="btn btn-outline-success my-2 my-sm-0 font-weight-bold" type="submit" value="Log in" />
                  </form>
                  <form class="button mr-2" method="get" action="/register">
                    <input class="btn btn-outline-success my-2 my-sm-0 font-weight-bold" type="submit" value="Sign Up" />
                  </form>
                </div>
              </nav>
          </header>
        <div class="page" id="what-container">
          <div class="text-container">
          <h5 id="what">
            Having difficulties tracking your expenses
            or meeting your savings target?
          </h5>
          <p>
            <b>Needs & Wants</b> is a personal expense-tracking
            application to help you know your finances better,
            no matter you are working, studying or just chilling.
          </p>
          </div>
        </div>
        <div class="page" id="how-container" >
          <div class="text-container">
          <h5 id="how">
          Interested? <span>Needs & Wants</span> is free for use!
          </h5>
          <p>
          Our application is designed to offer you a seamless experience. <br/>
          <a href="/register">Sign up</a> for an account now to get started!
          </p>
          </div>
        </div>
      </body>
      </html>
    );
  }
}

module.exports = MainPage;

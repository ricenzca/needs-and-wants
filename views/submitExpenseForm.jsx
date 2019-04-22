var React = require("react");
const Header = require("./header-template");

class SubmitExpenseForm extends React.Component {
  render() {
    console.log("SubmitExpenseForm jsx: ");

    const username = this.props.username;
    const expensePath = `/user/${username}`;
    const postPath = `/user/${username}/expense`;
    const cancelPath = `/user/${username}`
    const logoutPath = `/logout`;

    return (
      <html>
        <head>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
          <link rel="stylesheet" type="text/css" href="/stylesheets/header-template.css" />
          <link rel="stylesheet" type="text/css" href="/stylesheets/submitExpenseForm.css" />
          <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        </head>
        
        <body>
          <Header username={username} logoutPath={logoutPath} />

          <main>
            <div class="form-container">
              <h3>Log an Expense</h3>
              <form class="user-input-form" method="post" action={postPath} >
                <div class="form-group row">
                    <label for="amount" class="col-2 col-form-label font-weight-bold">Expense amount: </label>
                    <div class="col-3">
                      <input type="text" class="form-control" id="amount" name="amount" required/>
                    </div>
                </div>
                <fieldset class="form-group">
                  <legend>Is this a need or a want?</legend>
                    <div class="form-check">
                      <label class="form-check-label">
                       <input type="radio" class="form-check-input" name="need-want" id="need" value="need" required/>
                       Need
                      </label>
                    </div>
                    <div class="form-check">
                       <label class="form-check-label">
                       <input type="radio" class="form-check-input" name="need-want" id="want" value="want" required/>
                       Want
                       </label>
                    </div>
                </fieldset>
                <div class="form-group row">
                  <label for="date" class="col-2 col-form-label font-weight-bold">Date:</label>
                  <div class="col-3">
                    <input class="form-control" type="date" name="date" id="date" required/>
                  </div>
                </div>
                <div class="form-group row">
                    <label for="category" class="col-2 col-form-label font-weight-bold">Category: </label>
                    <div class="col-3">
                      <input type="text" class="form-control" id="category" name="category" />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="comments" class="col-2 col-form-label font-weight-bold">Comments: </label>
                    <div class="col-3">
                      <input type="text" class="form-control" id="comments" name="comments"/>
                    </div>
                </div>
                <input class="btn btn-outline-success font-weight-bold buttons mr-3" type="submit" value="Submit" />
                <input class="btn btn-outline-success font-weight-bold buttons" type="submit" value="Cancel" formMethod="get" formAction={cancelPath} />
              </form>
            </div>
          </main>
        </body>
      </html>
    );
  }
}

module.exports = SubmitExpenseForm;

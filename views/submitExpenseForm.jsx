var React = require("react");

class SubmitExpenseForm extends React.Component {
  render() {
    console.log("SubmitExpenseForm jsx: ");

    const username = this.props.username;
    const postPath = `/${username}/expense`;

    return (
      <html>
        <head />
        <body style={{textAlign: 'left'}}>
          <h3 style={{margin: '0 5px', position: 'relative', top: '0'}}>Log an Expense</h3>
          <form style={{display: 'inline-block', margin: '0 5px'}} method="POST" action={postPath} >
            <p>Expense amount: <input type="text" name="amount" placeholder="" required/></p>
            <p>Is this a need or a want?</p>
            <input id="need" type="radio" name="need-want" value="Need" required/>
            <label htmlFor="need">Need</label>
            <input id="want" type="radio" name="need-want" value="Want" />
            <label htmlFor="need">Want</label>
            <p>Date: <input type="date" name="date" value="" required/></p>
            <p>Comments (optional): <input type="text" name="comments" placeholder="e.g. Food, Transport" /></p>
            <input type="submit" value="Submit" />
          </form>
        </body>
      </html>
    );
  }
}

module.exports = SubmitExpenseForm;

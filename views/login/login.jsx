const React = require('react');
const MainHeaderTemplate = require('../mainHeaderTemplate')

class Login extends React.Component {
	render () {

		return (
			<html>
			<head>
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
				<link rel="stylesheet" type="text/css" href="../stylesheets/mainHeaderTemplate.css" />
				<link rel="stylesheet" type="text/css" href="../stylesheets/login.css" />
				<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
				<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
			</head>
			<body>
				<MainHeaderTemplate />
				<div class="main-container">
					<div class="logo-container">
						<img id="logo-2" src="./images/Logo-2.png" alt="Needs and wants logo"/>
					</div>
					<div class="form-container">
						<h1>Welcome back!</h1>
						<h3>Sign in to your account</h3>
						<form class="user-input-form" method="post" action="/login" >
						  <div class="form-group row">
						      <label for="username" class="col-sm-4 col-form-label">Username:</label>
						      <div class="col-sm-7">
						        <input type="text" class="form-control" id="username" name="username"/>
						      </div>
						  </div>
						  <div class="form-group row">
						      <label for="password" class="col-sm-4 col-form-label">Password:</label>
						      <div class="col-sm-7 mb-3">
						        <input type="password" class="form-control" id="password" name="password" />
						      </div>
						  </div>
						  <input class="btn btn-outline-success font-weight-bold buttons mr-3" type="submit" value="Submit" />
						  <input class="btn btn-outline-success font-weight-bold buttons" type="submit" value="Cancel" formMethod="get" formAction="/" />
						</form>
					</div>
				</div>
			</body>
			</html>
		);

	}
}

module.exports = Login;
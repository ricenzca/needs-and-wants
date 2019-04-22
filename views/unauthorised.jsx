const React = require('react');
const MainHeaderTemplate = require('./mainHeaderTemplate')

class Unauthorised extends React.Component {
	render () {

		return (
			<html>
			<head>
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
				<link rel="stylesheet" type="text/css" href="../stylesheets/mainHeaderTemplate.css" />
				<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
				<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
			</head>
			  <body>
			  <MainHeaderTemplate />
			  <h3 style={{margin: '5%', lineHeight: '2.5rem'}}>
			  You must be logged in to view this page.<br/>
			  Please <a href="/login">log in</a> and try again.
			  </h3>
			  </body>
			</html>
		);

	}
}

module.exports = Unauthorised;
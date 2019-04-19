window.onload = function () {
	plotChart();
}

function readCookie(name) {
	var key = name + "=";
	var cookies = document.cookie.split(';');
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
		if (cookie.indexOf(key) === 0) {
			cookie = decodeURIComponent(cookie.substring(key.length, cookie.length));
            console.log("Cookie");
            console.log(cookie);
            return cookie;
        }
	}
	return null;
}

function plotChart () {
	const monthlyExpense = JSON.parse(readCookie('monthlyExpense'));
	const xAxislabels = monthlyExpense.map(item => {
		return item.expense_month;
	})
	console.log("xAxislabels");
	console.log(xAxislabels);
	const values = monthlyExpense.map(item => {
		return item.monthly_sum;
	})
	console.log("Values");
	console.log(values);
	var canvas = document.getElementById('monthlyExpenseBarChart').getContext('2d');
	var myChart = new Chart(canvas, {
	    type: 'bar',
	    data: {
	        labels: xAxislabels,
	        datasets: [{
	            label: 'Monthly expenses',
	            data: values,
	            backgroundColor: 
	            // [
	                // 'rgba(255, 99, 132, 0.2)'
	                // ,
	                'rgba(54, 162, 235, 0.2)'
	                // ,
	                // 'rgba(255, 206, 86, 0.2)',
	                // 'rgba(75, 192, 192, 0.2)',
	                // 'rgba(153, 102, 255, 0.2)',
	                // 'rgba(255, 159, 64, 0.2)'
	            // ]
	            ,
	            borderColor: 
	            // [
	                'rgba(255, 99, 132, 1)'
	                // ,
	                // 'rgba(54, 162, 235, 1)',
	                // 'rgba(255, 206, 86, 1)',
	                // 'rgba(75, 192, 192, 1)',
	                // 'rgba(153, 102, 255, 1)',
	                // 'rgba(255, 159, 64, 1)'
	            // ]
	            ,
	            borderWidth: 1
	        }]
	    },
	    options: {
	    	legend: {
	    	   display: false
	    	},
	    	title: {
	    		display: true,
	    		text: ['Monthly Expense','(past 12 months)'],
	    		fontColor: 'black',
	    		fontSize: 15,
	    		padding: 20
	    	},
	        scales: {
	            yAxes: [{
	            	scaleLabel: {
	            	        display: true,
	            	        labelString: 'Dollars ($)',
	            	        rotation: 90
	            	      },
	                ticks: {
	                    beginAtZero: true
	                }
	            }]
	        }
	    }
	});
}



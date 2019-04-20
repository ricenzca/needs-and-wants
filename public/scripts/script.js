window.onload = function () {
	plotMonthlyExpenseChart();
	plotCategorizedExpenseChart();
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
            // console.log("Cookie");
            // console.log(cookie);
            return cookie;
        }
	}
	return null;
}

function plotMonthlyExpenseChart () {
	const monthlyExpense = JSON.parse(readCookie('monthlyExpense'));
	// console.log("monthlyExpense");
	// console.log(monthlyExpense);

	const xAxislabels = [];
	const needValues = [];
	for (let i=0; i<monthlyExpense.length; i+=2) {
		xAxislabels.push(monthlyExpense[i].expense_month);
		needValues.push(monthlyExpense[i].monthly_sum);
	}
	const wantValues = [];
	for (let j=1; j<monthlyExpense.length+1; j+=2) {
		wantValues.push(monthlyExpense[j].monthly_sum);
	}
	// console.log("xAxislabels");
	// console.log(xAxislabels);
	// console.log("needValues");
	// console.log(needValues);
	// console.log("wantValues");
	// console.log(wantValues);


	const values = monthlyExpense.map(item => {
		return item.monthly_sum;
	})
	// console.log("Values");
	// console.log(values);
	var monthlyExpenseBarChartCanvas = document.getElementById('monthlyExpenseBarChart').getContext('2d');
	var monthlyExpenseBarChart = new Chart(monthlyExpenseBarChartCanvas, {
	    type: 'bar',
	    data: {
	        labels: xAxislabels,
	        datasets: [
	        	{
	            label: 'Needs',
	            data: needValues,
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
	                // 'rgba(255, 99, 132, 1)'
	                // ,
	                'rgba(54, 162, 235, 1)'
	                // ,
	                // 'rgba(255, 206, 86, 1)',
	                // 'rgba(75, 192, 192, 1)',
	                // 'rgba(153, 102, 255, 1)',
	                // 'rgba(255, 159, 64, 1)'
	            // ]
	            ,
	            borderWidth: 1
	        },
	        {
	            label: 'Wants',
	            data: wantValues,
	            backgroundColor: 
	            // [
	                'rgba(255, 99, 132, 0.2)'
	                // ,
	                // 'rgba(54, 162, 235, 0.2)'
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
	        }
	        ]
	    },
	    options: {
	    	legend: {
	    	   display: true
	    	},
	    	title: {
	    		display: true,
	    		text: ['Monthly Expense'],
	    		fontColor: 'black',
	    		fontSize: 15,
	    		padding: 10
	    	},
	        scales: {
	            yAxes: [{
	            	scaleLabel: {
	            	        display: true,
	            	        labelString: 'Dollars ($)'
	            	      },
	                ticks: {
	                    beginAtZero: true
	                },
	                stacked: true
	            }],
	            xAxes: [{ stacked: true }]	           
	        }
	    }
	});
}

function plotCategorizedExpenseChart () {
	const categorizedExpense = JSON.parse(readCookie('categorizedExpense'));
	// console.log("categorizedExpense");
	// console.log(categorizedExpense);

	const pieLabels = categorizedExpense.map(item => {
		return item.category;
	})
	const pieValues = categorizedExpense.map(item => {
		return item.monthly_sum;
	})

	// console.log("pieLabels");
	// console.log(pieLabels);
	// console.log("pieValues");
	// console.log(pieValues);

	var categorizedExpenseChartCanvas = document.getElementById('categorizedExpenseChart').getContext('2d');
	var categorizedExpenseChart = new Chart(categorizedExpenseChartCanvas, {
	    type: 'pie',
	    data: {
	        labels: pieLabels,
	        datasets: [{
	        	label: 'Dollars($)',
	        	data: pieValues
	        }]
	    },
	    options: {
	    	legend: {
	    	   display: true
	    	},
	    	title: {
	    		display: true,
	    		text: ['Expenses by category'],
	    		fontColor: 'black',
	    		fontSize: 15,
	    		padding: 10
	    	},
	    	plugins: {
	    		colorschemes: {
	    			scheme: 'tableau.Tableau20'
	    		}
	    	}
	    }
	});
}



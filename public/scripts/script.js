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

	const expenseMonthArray = monthlyExpense.map(item => {
		return item.expense_month;
	})
	// console.log("expenseMonthArray\n", expenseMonthArray);
	const distinctMonths = [...new Set(expenseMonthArray)];
	// console.log("distinctMonths");
	// console.log(distinctMonths);

	const needValues = [];
	const wantValues = [];
	let i=0;
	let j=0;
	distinctMonths.forEach(item => {
		if (item === monthlyExpense[i].expense_month && monthlyExpense[i].need_want === "need" ) {
			needValues.push(monthlyExpense[i].monthly_sum);
			i++;
		} else {
			needValues.push(null);
		}
	})
	// console.log("needValues\n", needValues);

	distinctMonths.forEach(item => {
		if (item === monthlyExpense[i].expense_month && monthlyExpense[i].need_want === "want" ) {
			wantValues.push(monthlyExpense[i].monthly_sum);
			i++;
		} else {
			wantValues.push(null);
		}
	})
	// console.log("wantValues\n", wantValues);

	var monthlyExpenseBarChartCanvas = document.getElementById('monthlyExpenseBarChart').getContext('2d');
	var monthlyExpenseBarChart = new Chart(monthlyExpenseBarChartCanvas, {
	    type: 'bar',
	    data: {
	    	labels: distinctMonths,
	        datasets: [
	        {
	        	label: "Need",
	            data: needValues,
	            backgroundColor: 'rgba(54, 162, 235, 0.2)',
	            borderColor: 'rgba(54, 162, 235, 1)',
	            borderWidth: 1
	        },
	        {
	        	label: "Want",
	            data: wantValues,
	            backgroundColor: 'rgba(255, 99, 132, 0.2)',
	            borderColor: 'rgba(255, 99, 132, 1)',
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
	    		text: ['Monthly Expense Trend'],
	    		fontColor: 'black',
	    		fontSize: 20,
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
	            xAxes: [{ 
	            	stacked: true
	            }]	           
	        },
	        legend: {
	            labels: {
	            	fontSize: 13,
	            	fontColor: 'black',
	                fontStyle: 'bold'
	            }
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

	const current_month = categorizedExpense[0].expense_month;

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
	        	data: pieValues,
	        	borderColor: 'rgba(255,255,255,.5)'
	        }]
	    },
	    options: {
	    	legend: {
	    	   display: true
	    	},
	    	title: {
	    		display: true,
	    		text: [`Expense breakdown for current month [${current_month}]`],
	    		fontColor: 'black',
	    		fontStyle: 'bold',
	    		fontSize: 20,
	    		padding: 10
	    	},
	    	plugins: {
	    		colorschemes: {
	    			scheme: 'tableau.Tableau20'
	    		}
	    	},
	    	legend: {
	    	    labels: {
	    	    	fontSize: 12,
	    	    	fontColor: 'black',
	    	        fontStyle: 'bold',
	    	        padding: 15
	    	    }
	    	}
	    }
	});
}



const charts = document.querySelectorAll(".chart");
const charts1 = document.querySelectorAll(".chart1");

charts.forEach(function (chart) {
  var ctx = chart.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "March", "Apr", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
      datasets: [
        {
          label: "Transaction List",
          data: [120,23,78,60,56,35,110,150,56,98,100,70],
          
          backgroundColor: [
            "rgba(0, 0, 255, 0.8)",
            
            
          ],
          borderColor: [
            "rgba(0, 0, 255, 0.8)"
    
          ],
          borderWidth: 1,
        },
    
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});





charts1.forEach(function (chart) {
  var ctx = chart.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "March", "Apr", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
      datasets: [
        {
          label: "Rewards Received",
          data: [0,1,4,6,8,12,20,25,13,9,18,9],
          
          backgroundColor: [
            "rgba(386, 890, 345, 0.67)",
            
            
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
    
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});



$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});
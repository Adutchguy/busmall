'use strict';
function chart() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var productNames = [];
  var productClicks = [];

  for (var i = 0; i < imageData.length; i++) {
    productNames.push(imageData[i].name);
    productClicks.push(imageData[i].clicks);
  }

  var data = {
    labels: productNames,
    datasets: [{
      label: 'Image Clicks',
      data: productClicks,
      backgroundColor: 'blue'
    }]
  };

  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  });
};

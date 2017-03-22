'use strict';
function chart() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var productNames = [];
  var productClicks = [];

  // var percentOfTotal = [];
  for (var i = 0; i < imageData.length; i++) {
    productNames.push(imageData[i].name);
    productClicks.push(imageData[i].clicks);
    // var findPercent = (imageData[i].clicks / totalClicks) * 100;
    // percentOfTotal.push(findPercent);
  }

  var data = {
    labels: productNames,
    datasets: [{
      label: 'Image Clicks',
      data: productClicks,
      backgroundColor: 'rgba(66, 0, 255, 0.54)',
      borderColor: 'rgb(0, 0, 0)',
      borderWidth: 2,
      hoverBorderColor: 'rgb(198, 24, 0)',
      hoverBorderWidth: 3
    }]
  };

  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: data,
    options: {
      title:{
        display: true,
        text: 'HERE ARE THE RESULTS',
        position: 'top',
        fontSize: 16,
        fontFamily: "'Cutive', 'serif'",
        fontColor: '#000'
      },
      scales:{
        xAxes: [{

        }],
        yAxes: [{
          barThickness: 20
        }]
      }
    }
  }
  );
};

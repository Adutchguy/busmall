'use strict';
function chart() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  var productNames = [];
  var productClicks = [];
  var percentOfShownClicks = [];
  var percentOfTotal = [];
  for (var i = 0; i < imageData.length; i++) {
    productNames.push(imageData[i].name);
    productClicks.push(imageData[i].clicks);
    var findPercentOfTotal = Math.floor((imageData[i].clicks / totalSumClicks) * 100);
    var findPercentOfShownClicks = Math.floor((imageData[i].clicks / imageData[i].displayed) * 100);
    percentOfShownClicks.push(findPercentOfShownClicks);
    percentOfTotal.push(findPercentOfTotal);
  }

  var data = {
    labels: productNames,
    datasets: [{
      label: 'Percent of All Clicks',
      data:percentOfTotal,
      backgroundColor: 'rgba(66, 0, 255, 0.54)',
      borderColor: 'rgb(0, 0, 0)',
      borderWidth: 2,
      hoverBorderColor: 'rgb(255, 66, 0)',
      hoverBorderWidth: 3
    },{
      label: 'Percent of Clicks When Shown',
      data: percentOfShownClicks,
      backgroundColor: 'rgba(255,66,0,.54)',
      borderColor: 'rgb(0,0,0)',
      borderWidth: 1,
      hoverBorderColor: 'rgb(66,0,255)',
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
          stacked: true,
          ticks:{
            max: 100
          }

        }],
        yAxes: [{
          barThickness: 20,
          ticks: {
            fontColor: 'black',
            fontSize: '14'
          },
        }]
      }
    }
  }
  );
};

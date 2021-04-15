google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

/** Creates a chart and adds it to the page. */
function drawChart() {
  var data = google.visualization.arrayToDataTable([
        ['Vaccines', 'Pfizer', 'Moderna', 'J&J', { role: 'annotation' } ],
        ['2020', 83, 17, 0, ''],
        ['2021', 38, 25, 37, '']
      ]);

  var options_fullStacked = {
          isStacked: 'Percent Used',
          height: 300,
          legend: {position: 'top', maxLines: 3},
          hAxis: {
            minValue: 0,
 google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

/** Creates a chart and adds it to the page. */
function drawChart() {
  var data = google.visualization.arrayToDataTable([
        ['Vaccines', 'Pfizer', 'Moderna', 'J&J', { role: 'annotation' } ],
        ['2020', 83, 17, 0, ''],
        ['2021', 38, 25, 37, '']
      ]);

  var options_fullStacked = {
          isStacked: 'Percent Used',
          height: 300,
          legend: {position: 'top', maxLines: 3},
          hAxis: {
            minValue: 0,
            ticks: [0, .3, .6, .9, 1]
          }
        };

  const chart = new google.visualization.BarChart(
      document.getElementById('chart-container'));
  chart.draw(data, options_fullStacked);
}           ticks: [0, .3, .6, .9, 1]
          }
        };

  const chart = new google.visualization.BarChart(
      document.getElementById('chart-container'));
  chart.draw(data, options_fullStacked);
}

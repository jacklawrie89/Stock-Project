          var BASE_URL = 'https://query.yahooapis.com/v1/public/yql?q=';
      var MID_URL = 'select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22)';
      var END_URL = '&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
      var END_URL_JSON = '&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='
      var FINAL_URL = BASE_URL+MID_URL+END_URL;
      var changeValue = 0
      var dataArray = [
        [ 'Day', 'Value'],
      ];
    
     $.ajax({
      url: 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20%3D%20%22AAPL%22%20and%20startDate%20%3D%20%222016-09-01%22%20and%20endDate%20%3D%20%222016-10-27%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback='
      }).done(function(data) {
      console.log(data);
      var stockArray = data.query.results.quote;
      for (var i = 0; i < stockArray.length; i++) {
        var currentObject = stockArray[i];
        console.log(currentObject.Close, currentObject.Date);
        pushedArray = [currentObject.Date, parseFloat(currentObject.Close)];
        dataArray [0+i] = pushedArray;



      }
      console.log(dataArray);


       google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Day', 'Sales'],
          dataArray[30],
          dataArray[29],
          dataArray[28],
          dataArray[27],
          dataArray[26],
          dataArray[25],
          dataArray[24],
          dataArray[23],
          dataArray[22],
          dataArray[21],
          dataArray[20],
          dataArray[19],
          dataArray[18],
          dataArray[17],
          dataArray[16],
          dataArray[15],
          dataArray[14],
          dataArray[13],
          dataArray[12],
          dataArray[11],
          dataArray[10],
          dataArray[9],
          dataArray[8],
          dataArray[7],
          dataArray[6],
          dataArray[5],
          dataArray[4],
          dataArray[3],
          dataArray[2],
          dataArray[1],
          dataArray[0],
        ]);


        var options = {
          title: 'Average revenue in millions of dollars',
          hAxis: {title: 'Day',  titleTextStyle: {color: '#333'}},
          vAxis: {minValue: currentObject.Low }


        };

        var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
        chart.draw(data, options);

        $( window ).resize(
                  function() {
                    drawChart()

        }
        );
      }
      return dataArray;
      




      });


     


//https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quote%20where%20symbol%20in%20
//(%22YHOO%22%2C%22AAPL%22%2C%22GOOG%22%2C%22MSFT%22)&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys




      







      
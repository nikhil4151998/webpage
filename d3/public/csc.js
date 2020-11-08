Plotly.d3.csv('dataset.csv', function(err, rows){

  function unpack(rows, key) {
    return rows.map(function(row) {
      return row[key];
    });
  }
  
  var trace = {
    x: unpack(rows, 'Date'),
    open: unpack(rows, 'Open'),
    high: unpack(rows, 'High'),
    low: unpack(rows, 'Low'),
    close: unpack(rows, 'Close'),
  
    // cutomise colors
    increasing: {line: {color: 'black'}},
    decreasing: {line: {color: 'red'}},
  
    type: 'candlestick',
    xaxis: 'x',
    yaxis: 'y'
  };
  
  var data = [trace];
  
  var layout = {
    dragmode: 'zoom',
    showlegend: false,
    xaxis: {
      rangeslider: {
       visible: false
     }
    }
  };
  
  Plotly.newPlot('root', data, layout);
  });

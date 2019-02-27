Plotly.d3.csv('https://raw.githubusercontent.com/shirleyjoue/joue/master/2017usa%3E10.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

 scl = [[0, 'rgb(150,0,90)'],[0.125, 'rgb(0, 0, 200)'],[0.25,'rgb(0, 25, 255)'],[0.375,'rgb(0, 152, 255)'],[0.5,'rgb(44, 255, 150)'],[0.625,'rgb(151, 255, 0)'],[0.75,'rgb(255, 234, 0)'],[0.875,'rgb(255, 111, 0)'],[1,'rgb(255, 0, 0)']];

    var data = [{
        type: 'scattermapbox',
        mode: 'markers',
        text: unpack(rows, 'index'),
        lon: unpack(rows, 't_lon'),
        lat: unpack(rows, 't_lat'),
        marker: {
          color: unpack(rows, 'index'),
          colorscale: scl,
          cmin: 0,
          cmax: 80,
          reversescale: true,
          opacity: 0.5,
          size: 1.5,
          colorbar:{
            thickness: 10,
            titleside: 'right',
            outlinecolor: 'rgba(68,68,68,0)',
            ticks: 'outside',
            ticklen: 3,
            shoticksuffix: 'last',
            // ticksuffix: 'inches',
            dtick: 10
          }
        },
        name: 'NA Precipitation'
    }];

    layout = {
      dragmode: 'zoom', 
      mapbox: {
        center: {
          lat: 38.03697222, 
          lon: -90.70916722
        }, 
        domain: {
          x: [0, 1], 
          y: [0, 1]
        }, 
        style: 'light', 
        zoom: 1
      }, 
      margin: {
        r: 0, 
        t: 0, 
        b: 0, 
        l: 0, 
        pad: 0
      }, 
      showlegend: false
   };        

  Plotly.setPlotConfig({
    mapboxAccessToken: 'pk.eyJ1IjoiZXRwaW5hcmQiLCJhIjoiY2luMHIzdHE0MGFxNXVubTRxczZ2YmUxaCJ9.hwWZful0U2CQxit4ItNsiQ'
  })

    Plotly.newPlot('myDiv', data, layout, {showSendToCloud: true});
  });
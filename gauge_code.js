// Create the buildChart function.
function buildCharts(sample) {
  // Use d3.json to load the samples.json file 
  d3.json("samples.json").then((data) => {


    // Create a variable that holds the samples array. 
    var sample = data
    // Create a variable that filters the samples for the object with the desired sample number.
    var filterObj = data.forEach(filter => filter.values == sample)
    // 1. Create a variable that filters the metadata array for the object with the desired sample number.
    var metadata = filterObj.metadata
    var array = metadata.filter(filtered => filtered.id ==data)
    // Create a variable that holds the first sample in the array.
    var firstSample = array[0]

    // 2. Create a variable that holds the first sample in the metadata array.
    var firstMeta = metadata[0]
  
    // Create variables that hold the otu_ids, otu_labels, and sample_values.
    var varHolder = array.forEach(()=>{
      selector
        .append(otu_ids)
        .text(out_labels)
        .value("value",sample_values)

    })
    // 3. Create a variable that holds the washing frequency.
   var washingFrequency = metadata.map(metadata => parseFloat(metadata.wfreq))

    // Create the yticks for the bar chart.
    var yticks = varHolder.map(varHolder => varHolder.otu_ids)
    // Use Plotly to plot the bar data and layout.
    Plotly.newPlot("bar-plot", trace,barLayout);
    
    // Use Plotly to plot the bubble data and layout.
    Plotly.newPlot("bubble-plot", bubbleData, bubbleLayout); 
   
    
    // 4. Create the trace for the gauge chart.
    var gaugeData = [
      {
        domain: {x:[0,1], y:[0,1]},
        value:washingFrequency,
        title: {text:"Washing per Week"},
        type:"indicator",
        mode:"gauge+number"
      }
     
    ];
    
    // 5. Create the layout for the gauge chart.
    var gaugeLayout = { 
     width:600, height:500, margin: {t:0, b:0}
    };

    // 6. Use Plotly to plot the gauge data and layout.
    Plotly.newPlot("gauge_plot", gaugeData, gaugeLayout);
  });
}

console.log(varHolder)
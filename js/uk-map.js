/*
*   UK Map with Tooltip
*   This code was adapted from tutorials on bost.ocks.org by Mike Bostock and bl.ocks.org by Tiffany France
*   accessed 13-02-2020 and 20-02-2020 respectively
*   https://bost.ocks.org/mike/map/
*   https://bl.ocks.org/tiffylou/88f58da4599c9b95232f5c89a6321992
*/

d3.json('json/uk_countries.json').then(function(json) {
    var projection = d3.geoMercator()
        .scale(300)
        .fitExtent([[0, 0], [500, 500]], json);

    var geoGenerator = d3.geoPath()
    .projection(projection);

    // Join the FeatureCollection's features array to path elements
    var mapDiv = d3.select('#map')

    var svg = mapDiv.append("svg")
    .attr("viewBox", "0 0 500 500")
    .attr("width", "100%")
    .attr("preserveAspectRatio", "xMinYMin");

    var tooltip = d3.select("body").append("div") 
        .attr("class", "tooltip")       
        .style("opacity", 0);

    var csvData = ""

    d3.csv('dataset/CountriesIncidents.csv', d3.autoType).then(function (data) {
        csvData = data;
    });

    var countryCode = {
        "England":0,
        "Northern Ireland":1,
        "Scotland":2,
        "Wales":3
    }

    var numFormatter = new Intl.NumberFormat();

    svg.selectAll('path')
    .data(json.features)
    .enter()
    .append('path')
    .attr("class", function(d) { 
        return "countries " + d.properties.ctry17nm.replace(" ", ""); 
    })
    .attr('d', geoGenerator)
    .on("mouseover", function(d) {    
        tooltip.transition()    
        .duration(200)    
        .style("opacity", .9);
        tooltip.html('<b>Children : </b>'+numFormatter.format(csvData[countryCode[d.properties.ctry17nm]].Children)+
            '<br/><b>Adults : </b>'+numFormatter.format(csvData[countryCode[d.properties.ctry17nm]].Adults)+
            '<br/><b>Unknown : </b>'+numFormatter.format(csvData[countryCode[d.properties.ctry17nm]].Unknown)+
            '<br/><b>Total : </b>'+numFormatter.format(csvData[countryCode[d.properties.ctry17nm]].Total));
        
        tooltip.style("left", (d3.event.pageX) + "px")   
        .style("top", (d3.event.pageY - 28) + "px");  
      })          
      .on("mouseout", function(d) {   
        tooltip.transition()    
        .duration(500)    
        .style("opacity", 0); 
      });;

    svg.selectAll(".subunit-label")
    .data(json.features)
    .enter().append("text")
    .attr("class", function(d) { return "subunit-label " + d.properties.ctry17nm.replace(" ", ""); })
    .attr("transform", function(d) { return "translate(" + geoGenerator.centroid(d) + ")"; })
    .attr("dy", ".35em")
    .text(function(d) { return d.properties.ctry17nm; });

    
})
  
/* End of referenced code : UK Map with Tooltip */
var width = 1200,
    height = 750;

var color = d3.scale.category20();

var size = d3.scale.linear()
	  .domain([0,50])
      .range([5,25]);

var force = d3.layout.force()
    .charge(-120)
    .linkDistance(70)
    .size([width, height]);

var svg = d3.select("div#network").append("svg")
    .attr("width", width)
    .attr("height", height)
	.attr("pointer-events", "all")
	.call(d3.behavior.zoom().on("zoom", redraw));

var vis = svg
.append("svg:g");

function redraw() {
	vis.attr("transform",
	"translate(" + d3.event.translate + ")"
	+ " scale(" + d3.event.scale + ")");
	}

d3.json("1639_1648.json", function(error, graph) {
  force
      .nodes(graph.nodes)
      .links(graph.links)
      .start();

//	var borderPath = svg.append("rect")
//		  .attr("x", 0)
//		  .attr("y", 0)
//		  .attr("height", height)
//		  .attr("width", width)
//		  .style("stroke", "#000000")
//		  .style("fill", "none")
//		  .style("stroke-width", "1px");

  var link = vis.selectAll(".link")
      .data(graph.links)
    .enter().append("line")
      .attr("class", "link")
      .style("stroke-width", function(d) { return Math.sqrt(d.value); });

      
  var node = vis.selectAll(".node")
      .data(graph.nodes)
      .enter().append("circle")
      .attr("class", "node")
      .attr("r", function(d){ if (d.group==1) {return size(d.weight);} else {return 5;};})
//      .attr("r", 5)
      .style("fill", function(d) { if (d.group==1) {return "red"; } else {return "blue"; };})
      .call(force.drag);

  node.append("title")
      .text(function(d) { return d.name; });
      
       // http://stackoverflow.com/a/19125306
		  // On node hover, examine the links to see if their
		  // source or target properties match the hovered node.
		  node.on('mouseover', function(d) {
		    link.style('stroke', function(l) {
		      if (d === l.source || d === l.target)
		        return "#0000FF";
		      else
		        return "#fff";
		      });
		  });

		  // Set the stroke width back to normal when mouse leaves the node.
		  node.on('mouseout', function() {
		    link.style('stroke', "#999");
		  });

  
  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
    
  });
}); 

var optArray = [];
for (var i = 0; i < graph.nodes.length - 1; i++) {
    optArray.push(graph.nodes[i].name);
}
optArray = optArray.sort();
$(function () {
    $("#search").autocomplete({
        source: optArray
    });
});
function searchNode() {
    //find the node
    var selectedVal = document.getElementById('search').value;
    var node = vis.selectAll(".node");
    if (selectedVal == "none") {
        node.style("stroke", "white").style("stroke-width", "1");
    } else {
        var selected = node.filter(function (d, i) {
            return d.name != selectedVal;
        });
        selected.style("opacity", "0");
        var link = vis.selectAll(".link")
        link.style("opacity", "0");
        d3.selectAll(".node, .link").transition()
            .duration(5000)
            .style("opacity", 1);
    }
}

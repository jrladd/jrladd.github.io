var autocomplete = function(array) {
	$( function () {
		$("#search").autocomplete({
			source: array
		});
	});
};

var width = 1000,
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

d3.json("1649_1660.json", function(error, graph) {
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
      .style('stroke', 'black')
      .style("stroke-width", function(d) { return Math.sqrt(d.value); });

      
  var node = vis.selectAll(".node")
      .data(graph.nodes)
      .enter().append("circle")
      .attr("class", "node")
      .attr("r", function(d) {return size(d.weight);})
//      .attr("r", function(d){ if (d.group==1) {return size(d.weight);} else {return 5;};})
//      .attr("r", 5)
      .style("fill", function(d) { if (d.group==1) {return "#FF6663"; } else {return "#49B2FF"; };})
      .call(force.drag)
      .on('mouseover', connectedNodes) //Added code 
      .on('mouseout', releaseNodes);


    
  node.append("title")
      .text(function(d) { return d.name; });
  
  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
    
  });
  
  	var optArray = [];
	for (var i = 0; i < graph.nodes.length - 1; i++) {
		optArray.push(graph.nodes[i].name);
	}
	optArray = optArray.sort();
	autocomplete(optArray);
    
	  //Toggle stores whether the highlighting is on
	var toggle = 0;
	//Create an array logging what is connected to what
	var linkedByIndex = {};
	for (i = 0; i < graph.nodes.length; i++) {
		linkedByIndex[i + "," + i] = 1;
	};
	graph.links.forEach(function (d) {
		linkedByIndex[d.source.index + "," + d.target.index] = 1;
	});
	//This function looks up whether a pair are neighbours
	function neighboring(a, b) {
		return linkedByIndex[a.index + "," + b.index];
	}
	function connectedNodes() {
		if (toggle == 0) {
			//Reduce the opacity of all but the neighbouring nodes
			d = d3.select(this).node().__data__;
			node.style("opacity", function (o) {
				return neighboring(d, o) | neighboring(o, d) ? 1 : 0.1;
			});
			link.style("opacity", function (o) {
				return d.index==o.source.index | d.index==o.target.index ? 1 : 0.1;
			});
			//Reduce the op
			toggle = 1;
		} /*else {
			//Put them back to opacity=1
			node.style("opacity", 1);
			link.style("opacity", 1);
			toggle = 0;
		}*/
	}
	function releaseNodes() {
		if (toggle != 0) {
			node.style("opacity", 1);
			link.style("opacity", 1);
			toggle=0;
		}
	}  
});



function searchNode() {
    //find the node
    var selectedVal = document.getElementById('search').value;
    var node = svg.selectAll(".node");
    if (selectedVal == "none") {
        node.style("stroke", "white").style("stroke-width", "1");
    } else {
        var selected = node.filter(function (d, i) {
            return d.name != selectedVal;
        });
        selected.style("opacity", "0");
        var link = svg.selectAll(".link")
        link.style("opacity", "0");
        d3.selectAll(".node, .link").transition()
            .duration(5000)
            .style("opacity", 1);
    }
}



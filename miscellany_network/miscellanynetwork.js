var root = "/networks/miscellanies";
var graph;
var scale;
var slider;
var amount;

// JQuery Slider

/*$(function() {
		slider = $("#slider").slider({ animate:true, range: "min", max:100, min:0, change: function(event,ui) { drawNetwork( ui.value ); } });
		$("#slider").slider({ animate:true, range: "min", max:100, min:0, change: function(event,ui) { console.log( ui.value ); } });
});*/


var autocomplete = function(array) {
	$( function () {
		$("#search").autocomplete({
			source: array
		});
	});
};

var width = 750,
    height = 650;

var color = d3.scale.category20();

var size = d3.scale.linear()
	  .domain([0,10])
      .range([5,15]);

var edge_threshold_scale = d3.scale.pow()
	.exponent(9)
	.domain([0, 100])
	.range([0, 100]);

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


d3.json("miscellany_network.json", function(error, g) {
  if (error) throw error;
  graph = g;
  drawNetwork();
  });

function drawNetwork(threshold) {
	if(arguments.length == 0)
		threshold = 0;

  force
      .nodes(graph.nodes)
      .links(graph.links)
      .start();

	var links = selectLinks(graph, threshold);
	var nodes = selectNodes(graph, links);

	force
      .nodes(graph.nodes)
      .links(links)
      .start();

  var link = vis.selectAll(".link")
      .data(links)
    .enter().append("line")
      .attr("class", "link")
      .style("stroke-width", function(d) { return Math.sqrt(d.value); });

  var node = vis.selectAll(".node")
      .data(nodes)
      .enter().append("circle")
      .attr("class", "node")
//      .attr("r", function(d){ if (d.group==1 || d.group==2) {return size(d.weight);} else {return 5;};})
      .attr("r", function(d) { if (d.group >2) {return size(d.weight);} else {return 20;};})
//      .attr("r", 5)
      .style("fill", function(d) {if (d.group==1) {return "red"; } else if (d.group==2) {return "blue"; } else if (d.group==3 || d.group==5) { return "#999"; } else {return "purple";};})
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

	var optArray = [];
	for (var i = 0; i < graph.nodes.length - 1; i++) {
		optArray.push(graph.nodes[i].name);
	}
	optArray = optArray.sort();
	autocomplete(optArray);

  });

	  //Toggle stores whether the highlighting is on
	var toggle = 0;
	//Create an array logging what is connected to what
	var linkedByIndex = {};
	for (i = 0; i < graph.nodes.length; i++) {
		linkedByIndex[i + "," + i] = 1;
	};
	links.forEach(function (d) {
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

}


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

function selectLinks(json, threshold){
	var ln = [],
		i = 0;
	if(threshold == 0){
		return json.links;
	}
	for(i = 0; i < json.links.length; i++){
//		console.log(json.links[i].source.weight);
		if(json.links[i].ew >= edge_threshold_scale(threshold)){
			ln.push(json.links[i]);
		}
	}
	return ln;
}

// Return a subset of nodes
function selectNodes(js, lnks){
	var nds = [],
		i = 0;
	var n;
	for(i = 0; i < lnks.length; i++){
		n = js.nodes[lnks[i].source.index];
		if(nds.indexOf(n) == -1)
			nds.push(n);
		n = js.nodes[lnks[i].target.index];
		if(nds.indexOf(n) == -1)
			nds.push(n);
	}
	return nds;
}

% Understanding and Interpreting Your Network
% John R. Ladd | jrladd.com/slides/networkbasics
% (use arrow keys or spacebar to navigate)

# Basic Parts

## Networks are made up of...

- Entities (entity = node/vertex/actor)
- Relationships (relationship = edge/link/tie)
- We'll use "nodes" and "edges"

![](network_img/node_edge.png)

## Nodes and Edges have Attributes

## Node Attributes

- numerical (size)
- categorical (color)

![](network_img/node_attributes.png)

## Edge Attributes

## Directed and Undirected Edges

![](network_img/directed_edge.png)

## Weighted and Unweighted Edges

![](network_img/weighted_edge.png)

## Edge Types

![](network_img/type_edge.png)

# Multiple Edges "in a row" Make a Path

## Path & Diameter

![](network_img/path.png)

(& Average Shortest Path Length)

# Some special kinds of nodes

## Isolates

![](network_img/isolates.png)

## Hubs

![](network_img/hubs.png)

## Bridges

![](network_img/bridges.png)

# Measuring a node's "importance" with centrality

## Degree

![](network_img/degree.png)

## Strength

![](network_img/strength.png)

## Betweenness

![](network_img/betweenness.png)

# Different kinds of entities or nodes

## Unipartite/unimodal

![](network_img/unipartite.png)

## Bipartite/bimodal

![](network_img/bipartite1.png)

## Bipartite (cont.)

![](network_img/bipartite2.png)

## Multipartite/k-partite/multimodal

![](network_img/multipartite.png)

# Groups of nodes within a network

## Connected components

![](network_img/components.png)

## Cliques and clustering

![](network_img/cliques.png)

## Clustering Coefficient

![Image from [Wikipedia](https://en.wikipedia.org/wiki/Clustering_coefficient)](network_img/clustering_coefficient.svg)

## Communities and community detection

![](network_img/communities.png)

# Density

## A Sparse Network

![](network_img/sparse.png)

## A Dense Network

![](network_img/dense.png)

# There are many ways to visualize a network

## Adjacency Matrix

![Tilman Piesk, via Wikipedia](network_img/adjacency_matrix.svg)

## Adjacency List

![](network_img/adjacency_list.png)

- A adjacent to B,C
- B adjacent to A,C
- C adjacent to A,B

## Node-Link Diagram

![](network_img/node_edge.png)

# Other Important Concepts

## Triadic Closure

![](network_img/triadic_closure.png)

## Assortative mixing/Homophily

![](network_img/homophily.png)

## Preferential Attachment

![](network_img/preferential_attachment.png)

## Weak Ties

![](network_img/weak_ties.png)

## Small World Network

<div style="width:50%;float:left;">
![](network_img/bacon.jpg)
</div>
<div style="width:50%;float:left;">
- low average path length
- low clustering coefficients
- degree distribution follows power law (a few large hubs)
- low diameter (usually around "six degrees")
</div>

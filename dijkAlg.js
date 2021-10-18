var jsgraphs = require("js-graph-algorithms");

var g = new jsgraphs.WeightedGraph(7); // 7 = The no. of nodes in the graph

//node U
// g.addEdge("U", "A");
// g.addEdge("U", "C");
// g.addEdge("U", "B");
// g.addEdge("U", "V");
g.addEdge(new jsgraphs.Edge(0, 5, 1.7));
g.addEdge(new jsgraphs.Edge(0, 2, 1.1));
g.addEdge(new jsgraphs.Edge(0, 1, 0.5));
g.addEdge(new jsgraphs.Edge(0, 6, 2.5));

//node A
// g.addEdge("A", "U");
// g.addEdge("A", "C");
// g.addEdge("A", "D");
g.addEdge(new jsgraphs.Edge(5, 0, 1.7));
g.addEdge(new jsgraphs.Edge(5, 2, 0.3));
g.addEdge(new jsgraphs.Edge(5, 3, 0.4));

//node B
// g.addEdge("B", "U");
// g.addEdge("B", "C");
g.addEdge(new jsgraphs.Edge(1, 0, 0.5));
g.addEdge(new jsgraphs.Edge(1, 2, 0.4));

//node C
// g.addEdge("C", "A");
// g.addEdge("C", "U");
// g.addEdge("C", "D");
// g.addEdge("C", "B");
// g.addEdge("C", "S");
g.addEdge(new jsgraphs.Edge(2, 5, 0.3));
g.addEdge(new jsgraphs.Edge(2, 0, 1.1));
g.addEdge(new jsgraphs.Edge(2, 3, 0.9));
g.addEdge(new jsgraphs.Edge(2, 1, 0.4));
g.addEdge(new jsgraphs.Edge(2, 4, 0.7));

//node D
// g.addEdge("D", "A");
// g.addEdge("D", "C");
// g.addEdge("D", "V");
g.addEdge(new jsgraphs.Edge(3, 5, 0.4));
g.addEdge(new jsgraphs.Edge(3, 2, 0.9));
g.addEdge(new jsgraphs.Edge(3, 6, 0.7));

//node S
// g.addEdge("S", "C");
// g.addEdge("S", "V");
g.addEdge(new jsgraphs.Edge(4, 2, 0.7));
g.addEdge(new jsgraphs.Edge(4, 6, 1.0));

//node V
// g.addEdge("V", "U");
// g.addEdge("V", "S");
// g.addEdge("V", "D");
g.addEdge(new jsgraphs.Edge(6, 0, 2.5));
g.addEdge(new jsgraphs.Edge(6, 4, 1.0));
g.addEdge(new jsgraphs.Edge(6, 3, 0.7));

//node labels
g.node(0).label = "U";
g.node(1).label = "B";
g.node(2).label = "C";
g.node(3).label = "D";
g.node(4).label = "S";
g.node(5).label = "A";
g.node(6).label = "V";

var dijkstra = new jsgraphs.Dijkstra(g, 0);

// V = Antal noder
// g = Er hele grafen
// idette tilfølde er g.V = 7, antal noder i denne graf
 
for(var v = 1; v < g.V; ++v){
    if(dijkstra.hasPathTo(v = 6)){ // v = 6, da end-node er V
        var path = dijkstra.pathTo(v);
        console.log('Shortest path from ' + g.node(0).label + ' to ' + g.node(v).label );
        for(var i = 0; i < path.length; ++i) {
            var e = path[i];
            console.log(g.node(e.from()).label+ ' => ' + e.to() + ': ' + e.weight);
        };
        console.log('=====path from 0 to ' + v + ' end==========');
        console.log('=====distance: '  + dijkstra.distanceTo(v) + '=========');
    };
};


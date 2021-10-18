const http = require('http');
let httpProxy = require('http-proxy');
let port = process.argv.splice(2)[0];

const proxy = httpProxy.createServer();
let numero = [];

var jsgraphs = require('js-graph-algorithms');
var g = new jsgraphs.WeightedGraph(7);

g.addEdge(new jsgraphs.Edge(0, 5, 1.7));
g.addEdge(new jsgraphs.Edge(0, 2, 1.1));
g.addEdge(new jsgraphs.Edge(0, 1, 0.5));
g.addEdge(new jsgraphs.Edge(0, 6, 2.5));
g.addEdge(new jsgraphs.Edge(5, 0, 1.7));
g.addEdge(new jsgraphs.Edge(5, 2, 0.3));
g.addEdge(new jsgraphs.Edge(5, 3, 0.4));
g.addEdge(new jsgraphs.Edge(1, 0, 0.5));
g.addEdge(new jsgraphs.Edge(1, 2, 0.4));
g.addEdge(new jsgraphs.Edge(2, 5, 0.3));
g.addEdge(new jsgraphs.Edge(2, 0, 1.1));
g.addEdge(new jsgraphs.Edge(2, 3, 0.9));
g.addEdge(new jsgraphs.Edge(2, 1, 0.4));
g.addEdge(new jsgraphs.Edge(2, 4, 0.7));
g.addEdge(new jsgraphs.Edge(3, 5, 0.4));
g.addEdge(new jsgraphs.Edge(3, 2, 0.9));
g.addEdge(new jsgraphs.Edge(3, 6, 0.7));
g.addEdge(new jsgraphs.Edge(4, 2, 0.7));
g.addEdge(new jsgraphs.Edge(4, 6, 1.0));
g.addEdge(new jsgraphs.Edge(6, 0, 2.5));
g.addEdge(new jsgraphs.Edge(6, 4, 1.0));
g.addEdge(new jsgraphs.Edge(6, 3, 0.7));

g.node(0).label = 8001;
g.node(1).label = 8002;
g.node(2).label = 8003;
g.node(3).label = 8004;
g.node(4).label = 8005;
g.node(5).label = 8006;
g.node(6).label = 8007;

var dijkstra = new jsgraphs.Dijkstra(g, 0);
dikkedik();

loadBalancer = http.createServer(function roundRobin(req, res) {
    for (let i = 0; i < numero.length; i++) {
        let target = {
            target: { host: "localhost", port: numero[i] } //port: dikkedik() }
        };
        proxy.web(req, res, target);
        //numero.push(target);
        //console.log("Message passed to port: http://" + target.target.host + ":" + target.target.port);
        //console.log(i);
        if (i == numero.length -1 ) {
            res.write("\nMessage sent from U to V to final port: " + target.target.port);
        } else {
            res.write("\nMessage sent from U to V through port: " + target.target.port);
        }
    };
});

loadBalancer.listen(port || 8000);

function dikkedik() {
    for(var v = 1; v < g.V; v++) {
        if(dijkstra.hasPathTo(v = 6)) {
            var path = dijkstra.pathTo(v);
            console.log('===== Path from ' + g.node(0).label + ' to ' + g.node(v).label + ' =====');
            for(let i = 0; i < path.length; i++) {
                var e = path[i];
                console.log(g.node(e.from()).label + ' => ' + g.node(e.to()).label + ': ' + e.weight);      
                numero.push(g.node(e.to()).label)
            };
            console.log('===== Distance: '  + dijkstra.distanceTo(v) + ' s. =====');
            
        };
        console.log(numero);
            return g.node(v).label;
    };
};


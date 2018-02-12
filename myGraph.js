//modelled on the graph available here
//https://www.geeksforgeeks.org/implementation-graph-javascript/

//graph is UNDIRECTED (multidirectional edges)

class Graph {
  constructor() {
    this.numVertices = 0;
    this.adjacencyList = new Map();
  }

  addVertex(value) {
    if (!value) {
      throw new Error('Vertex value must evaluate to boolean true');
    }
    this.adjacencyList.set(value, []);
    this.numVertices++;
  }

  addEdge(source, destination) {
    //edge cases
    if (!this.adjacencyList.has(source)) {
      throw new Error('Source vertex is not available.');
    } else if (!this.adjacencyList.has(destination)) {
      throw new Error('Destination vertex is not available');
    }

    this.adjacencyList.get(source).push(destination);
    this.adjacencyList.get(destination).push(source);
  }

  print() {
    console.log(this.adjacencyList);
  }

  bfs(start) {
    const visited = [];
    for (let i = 0; i < this.numVertices; i++) {
      visited[i] = false;
    }
    const queue = [];
    visited[start] = true;
    queue.push(start);

    while (queue.length) {
      let nextNode = queue.shift();
      console.log(nextNode);

      let nodeList = this.adjacencyList.get(nextNode);
      for (let j = 0; j < nodeList.length; j++) {
        let linkedNode = nodeList[j];
        if (!visited[linkedNode]) {
          visited[linkedNode] = true;
          queue.push(linkedNode);
        }
      }
    }
  }

  dfs(start, visited = []) {
    if (!visited.length) {
      for (let i = 0; i < this.numVertices; i++) {
        visited[i] = false;
      }
    }
    console.log(start);
    visited[start] = true;

    const neighbors = this.adjacencyList.get(start);
    for (let j = 0; j < neighbors.length; j++) {
      let neighbor = neighbors[j];
      if (!visited[neighbor]) {
        this.dfs(neighbor, visited);
      }
    }
  }
}

// Using the above implemented graph class
const g = new Graph();
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

// adding vertices
for (let i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// g.print();

// g.dfs('A');

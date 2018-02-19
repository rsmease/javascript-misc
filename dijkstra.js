//this is not an original implementation
//this was written to practice the algorithm
//code is based on:
//https://github.com/mburst/dijkstras-algorithm/blob/master/dijkstras.js

const INFINITY = 1 / 0;

class PriorityQueue {
    constructor() {
        this.nodes = [];
    }

    enqueue(priority, key) {
        this.nodes.push({
            key: key,
            priority: priority
        });
        this.sort();
    }

    dequeue() {
        return this.nodes.shift().key;
    }

    sort() {
        this.nodes.sort(function (a, b) {
            return a.priority - b.priority;
        })
    }

    isEmpty() {
        return !this.nodes.length;
    }
}

class Graph {
    constructor() {
        this.vertices = {};
    }

    addVertex(name, edges) {
        this.vertices[name] = edges;
    }

    print() {
        for (let v in this.vertices) {
            console.log(`${v} : ${JSON.stringify(this.vertices[v])}`);
        }
    }

    shortestPath(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        const path = [];
        let smallest, vertex, neighbor, alt;

        for (let vertex in this.vertices) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(0, vertex);
            } else {
                distances[vertex] = INFINITY;
                nodes.enqueue(INFINITY, vertex);
            }
            previous[vertex] = null;
        }

        while (!nodes.isEmpty()) {
            smallest = nodes.dequeue();

            if (smallest === finish) {

                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }

            if (!smallest || distances[smallest] === INFINITY) {
                continue;
            }

            for (let neighbor in this.vertices[smallest]) {
                alt = distances[smallest] + this.vertices[smallest][neighbor];
                if (alt < distances[neighbor]) {
                    distances[neighbor] = alt;
                    previous[neighbor] = smallest;

                    nodes.enqueue(alt, neighbor);
                }
            }
        }
        path.push(start);
        return path;
    }
}

const g = new Graph();

g.addVertex('A', {
    B: 7,
    C: 8
});
g.addVertex('B', {
    A: 7,
    F: 2
});
g.addVertex('C', {
    A: 8,
    F: 6,
    G: 4
});
g.addVertex('D', {
    F: 8
});
g.addVertex('E', {
    H: 1
});
g.addVertex('F', {
    B: 2,
    C: 6,
    D: 8,
    G: 9,
    H: 3
});
g.addVertex('G', {
    C: 4,
    F: 9
});
g.addVertex('H', {
    E: 1,
    F: 3
});

console.log(g.shortestPath('A', 'H').reverse());
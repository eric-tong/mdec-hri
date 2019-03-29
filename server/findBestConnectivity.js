function findBestConnectivity(base, target) {
    // Set connectivity relative to base
    base.distance = 0;

    // Initialise set of visited nodes and visit queue
    const visited = new Set();
    const queue = [base];

    while (queue.length > 0) {
        const node = queue.shift();

        // For each adjacent node, update the distance
        node.adjacentNodes.forEach(([adjacentNode, weight]) => {
            if (!visited.has(adjacentNode)) {

                // Update distance if new distance is smaller
                const newDistance = node.distance + weight;
                if (newDistance < adjacentNode.distance) {
                    adjacentNode.distance = newDistance;
                    adjacentNode.bestAdjacentNode = node;
                }

                // Add to visit queue if not target
                if (adjacentNode !== target) {
                    queue.push(adjacentNode);
                }
            }
        });
        visited.add(node);
    }

    // Get the path from base to target
    const path = [];
    let node = target;
    while (node) {
        path.unshift(node);
        node = node.bestAdjacentNode;
    }
    return path;
}

module.exports = findBestConnectivity;
function findBestConnectivity(base, target) {
    base.distance = 0;

    const visited = new Set();
    const queue = [base];

    while (queue.length > 0) {
        const node = queue.shift();
        node.adjacentNodes.forEach(([adjacentNode, weight]) => {
            if (!visited.has(adjacentNode)) {
                const newDistance = node.distance + weight;
                if (newDistance < adjacentNode.distance) {
                    adjacentNode.distance = newDistance;
                    adjacentNode.bestAdjacentNode = node;
                }

                if (adjacentNode !== target) {
                    queue.push(adjacentNode);
                }
            }
        });
        visited.add(node);
    }

    return getPath(target);
}

function getPath(node) {
    const result = [];
    while (node) {
        result.unshift(node);
        node = node.bestAdjacentNode;
    }
    return result;
}

function print(nodes) {
    if (Array.isArray(nodes)) {
        console.log(nodes.map(node => node.id));
    } else {
        console.log(nodes.id);
    }
}

module.exports = findBestConnectivity;
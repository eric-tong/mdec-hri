const findBestConnectivity = require('../server/findBestConnectivity');

test('finds best connectivity', () => {
    const nodes = Array.from({ length: 6 }, (v, k) => ({ id: k, adjacentNodes: [], distance: Infinity }));
    const edges = [[0, 1, 7], [0, 2, 9], [0, 5, 14], [1, 3, 15], [1, 2, 10], [2, 3, 11], [2, 5, 2], [5, 4, 9], [3, 4, 5]];

    edges.forEach( ([from, to, weight]) => {
        nodes[from].adjacentNodes.push([nodes[to], weight]);
        nodes[to].adjacentNodes.push([nodes[from], weight]);
    });

    const actual = findBestConnectivity(nodes[0], nodes[4]).map(node => node.id);
    const expected = [0, 2, 5, 4];

    expect(actual).toEqual(expected);
});
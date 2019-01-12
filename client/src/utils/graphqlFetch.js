export const graphqlFetch = query =>
    fetch('graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: query
        }),
    }).then(res => res.json())
    .then(res => res.data)
    .catch(e => console.log(e));
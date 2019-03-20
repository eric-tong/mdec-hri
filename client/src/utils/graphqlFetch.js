export const graphqlFetch = (query, variables) =>
    fetch('graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: query,
            variables: variables
        }),
    }).then(res => res.json())
    .then(res => res.data)
    .catch(e => console.log(e));
import React from 'react'
import Map from './components/Map.js'

function App() {
    const base = {
        latitude: 51.7520,
        longitude: -1.2577,
    }
    return <Map base={base} />
}
export default App
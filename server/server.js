import express from 'express'
const app = express()
app.get('/api', (req, res) => {
    res.send({
      message: 'Hot reload!'
    })
})
export default app
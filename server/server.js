import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
// load .env before anything that reads process.env (like the database pool)
import './config/dotenv.js'

// import the router from your routes file
import locationsRouter from './routes/locations.js'
import eventsRouter from './routes/events.js'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
    app.use(favicon(path.resolve('../', 'client', 'public', 'party.png')))
}
else if (process.env.NODE_ENV === 'production') {
    app.use(favicon(path.resolve('public', 'party.png')))
    app.use(express.static('public'))
}

// specify the api path for the server to use
app.use('/api/locations', locationsRouter)
app.use('/api/events', eventsRouter)

// any other /api path is a 404, so it never falls through to the React app
app.use('/api', (req, res) => {
    res.status(404).json({ error: `No API route for ${req.method} ${req.originalUrl}` })
})


if (process.env.NODE_ENV === 'production') {
    app.get('/*', (_, res) =>
        res.sendFile(path.resolve('public', 'index.html'))
    )
}

app.listen(PORT, () => {
    console.log(`server listening on http://localhost:${PORT}`)
})
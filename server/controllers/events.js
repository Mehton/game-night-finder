import { pool } from '../config/database.js'

const getEvents = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM events ORDER BY date ASC, time ASC')
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getEventById = async (req, res) => {
    try {
        const id = Number(req.params.id)

        if (!Number.isInteger(id)) {
            return res.status(404).json({ error: `Event ${req.params.id} not found` })
        }

        const results = await pool.query('SELECT * FROM events WHERE id = $1', [id])

        if (results.rows.length === 0) {
            return res.status(404).json({ error: `Event ${req.params.id} not found` })
        }

        res.status(200).json(results.rows[0])
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export default {
    getEvents,
    getEventById
}

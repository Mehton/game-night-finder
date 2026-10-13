import { pool } from '../config/database.js'

const getLocations = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM locations ORDER BY id ASC')
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getLocationById = async (req, res) => {
    try {
        const id = Number(req.params.id)

        if (!Number.isInteger(id)) {
            return res.status(404).json({ error: `Location ${req.params.id} not found` })
        }

        const results = await pool.query('SELECT * FROM locations WHERE id = $1', [id])

        if (results.rows.length === 0) {
            return res.status(404).json({ error: `Location ${req.params.id} not found` })
        }

        res.status(200).json(results.rows[0])
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getLocationEvents = async (req, res) => {
    try {
        const id = Number(req.params.id)

        if (!Number.isInteger(id)) {
            return res.status(404).json({ error: `Location ${req.params.id} not found` })
        }

        const results = await pool.query('SELECT * FROM events WHERE location_id = $1 ORDER BY date ASC, time ASC', [id])
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export default {
    getLocations,
    getLocationById,
    getLocationEvents
}

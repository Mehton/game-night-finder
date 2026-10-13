import './dotenv.js'
import { pool } from './database.js'
import locations from '../data/locations.js'
import events from '../data/events.js'

const createTables = async () => {
    const query = `
        DROP TABLE IF EXISTS events;
        DROP TABLE IF EXISTS locations;

        CREATE TABLE IF NOT EXISTS locations (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            slug VARCHAR(100) NOT NULL UNIQUE,
            description TEXT,
            address VARCHAR(255) NOT NULL,
            city VARCHAR(100) NOT NULL,
            state VARCHAR(2) NOT NULL,
            zip VARCHAR(10) NOT NULL,
            image TEXT
        );

        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            date DATE NOT NULL,
            time TIME NOT NULL,
            image TEXT,
            location_id INTEGER NOT NULL REFERENCES locations(id) ON DELETE CASCADE
        );
    `

    await pool.query(query)
    console.log('🎉 locations and events tables created')
}

const seedLocations = async () => {
    for (const location of locations) {
        const query = `
            INSERT INTO locations (name, slug, description, address, city, state, zip, image)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `
        const values = [location.name, location.slug, location.description, location.address, location.city, location.state, location.zip, location.image]

        await pool.query(query, values)
        console.log(`✅ ${location.name} added`)
    }
}

const seedEvents = async () => {
    for (const event of events) {
        const query = `
            INSERT INTO events (title, description, date, time, image, location_id)
            VALUES ($1, $2, $3, $4, $5, $6)
        `
        const values = [event.title, event.description, event.date, event.time, event.image, event.location_id]

        await pool.query(query, values)
        console.log(`✅ ${event.title} added`)
    }
}

const reset = async () => {
    try {
        await createTables()
        await seedLocations()
        await seedEvents()
    }
    catch (error) {
        console.error('⚠️ error resetting database', error)
    }
    finally {
        await pool.end()
    }
}

reset()

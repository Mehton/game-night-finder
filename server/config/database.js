import pg from 'pg'

// Return DATE columns as plain 'YYYY-MM-DD' strings so they don't shift across time zones
pg.types.setTypeParser(1082, (value) => value)

const config = {
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE,
    ssl: {
        rejectUnauthorized: false
    }
}

export const pool = new pg.Pool(config)

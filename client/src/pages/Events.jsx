import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import LocationsAPI from '../services/LocationsAPI'
import '../css/LocationEvents.css'

const Events = () => {
    const [events, setEvents] = useState([])
    const [locations, setLocations] = useState([])
    const [selectedLocation, setSelectedLocation] = useState('all')

    useEffect(() => {
        (async () => {
            try {
                const [eventsData, locationsData] = await Promise.all([
                    EventsAPI.getAllEvents(),
                    LocationsAPI.getAllLocations()
                ])
                setEvents(eventsData)
                setLocations(locationsData)
            }
            catch (error) {
                console.error(error)
            }
        }) ()
    }, [])

    const filteredEvents = selectedLocation === 'all'
        ? events
        : events.filter(event => event.location_id === Number(selectedLocation))

    return (
        <div className='location-events'>
            <header>
                <div className='location-info'>
                    <h2>All Events</h2>
                    <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
                        <option value='all'>All locations</option>
                        {locations.map(location =>
                            <option key={location.id} value={location.id}>{location.name}</option>
                        )}
                    </select>
                </div>
            </header>

            <main>
                {
                    filteredEvents.length > 0 ? filteredEvents.map(event =>
                        <Event key={event.id} id={event.id} />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events found!'}</h2>
                }
            </main>
        </div>
    )
}

export default Events

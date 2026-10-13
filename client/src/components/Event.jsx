import React, { useState, useEffect } from 'react'
import EventsAPI from '../services/EventsAPI'
import dates from '../utils/dates'
import '../css/Event.css'

const Event = (props) => {

    const [event, setEvent] = useState({})
    const [remaining, setRemaining] = useState('')

    useEffect(() => {
        (async () => {
            try {
                const eventData = await EventsAPI.getEventById(props.id)
                setEvent(eventData)
            }
            catch (error) {
                console.error(error)
            }
        }) ()
    }, [props.id])

    // Refresh the countdown every minute
    useEffect(() => {
        const update = () => setRemaining(dates.formatRemainingTime(event.date, event.time))
        update()
        const interval = setInterval(update, 60000)
        return () => clearInterval(interval)
    }, [event])

    const past = dates.isPast(event.date, event.time)

    return (
        <article className='event-information'>
            <img src={event.image} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{event.title}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {dates.formatDate(event.date)} <br /> {dates.formatTime(event.time)}</p>
                    <p id={`remaining-${event.id}`} className={past ? 'negative-time-remaining' : ''}>{remaining}</p>
                </div>
            </div>
        </article>
    )
}

export default Event

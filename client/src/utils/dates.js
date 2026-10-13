// date is 'YYYY-MM-DD' and time is 'HH:MM' or 'HH:MM:SS', as stored in Postgres
const toDateTime = (date, time) => {
    if (!date || !time) return null
    const [year, month, day] = date.slice(0, 10).split('-').map(Number)
    const [hours, minutes] = time.split(':').map(Number)
    return new Date(year, month - 1, day, hours, minutes)
}

const formatDate = (date) => {
    if (!date) return ''
    const [year, month, day] = date.slice(0, 10).split('-').map(Number)
    return new Date(year, month - 1, day).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
}

const formatTime = (time) => {
    if (!time) return ''
    const [hours, minutes] = time.split(':').map(Number)
    const period = hours >= 12 ? 'PM' : 'AM'
    return `${hours % 12 || 12}:${String(minutes).padStart(2, '0')} ${period}`
}

// Returns a countdown like "3d 4h 12m left", or "Ended 2d 1h ago" for past events
const formatRemainingTime = (date, time) => {
    const start = toDateTime(date, time)
    if (!start) return ''

    const diff = start - new Date()
    const totalMinutes = Math.floor(Math.abs(diff) / 60000)
    const days = Math.floor(totalMinutes / 1440)
    const hours = Math.floor((totalMinutes % 1440) / 60)
    const minutes = totalMinutes % 60

    const parts = []
    if (days) parts.push(`${days}d`)
    if (hours) parts.push(`${hours}h`)
    if (!days) parts.push(`${minutes}m`)

    return diff >= 0 ? `${parts.join(' ')} left` : `Ended ${parts.join(' ')} ago`
}

const isPast = (date, time) => {
    const start = toDateTime(date, time)
    return start ? start < new Date() : false
}

export default {
    formatDate,
    formatTime,
    formatRemainingTime,
    isPast
}

import React from 'react'
import { Link } from 'react-router-dom'
import '../css/PageNotFound.css'

const PageNotFound = () => {
    return (
        <div className='page-not-found'>
            <h2><i className="fa-solid fa-dice"></i> 404: Page Not Found</h2>
            <p>Looks like this roll missed. The page you're looking for doesn't exist.</p>
            <Link to='/' role='button'>Back to the map</Link>
        </div>
    )
}

export default PageNotFound

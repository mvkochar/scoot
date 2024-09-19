import React from 'react'
import './css/Locations.css'
import CustomButton from '../components/CustomButton/CustomButton'

const Locations = () => {
    return (
        <>
            <main className='locations-main'>
                <h1 className="locations-main-title">Locations</h1>
            </main>
            <div className="locations-map"><img src="/images/map.png" alt="map" /></div>
            <section className="locations-action d-f jc-sb align-center">
                <h3 className="locations-action-title">Your city not listed?</h3>
                <p className="locations-action-desc">
                    If you'd like to see Scoot in your hometown, be sure to let us know.
                    We track requests and plan launches based on demand. Feel free to message us
                    by clicking the link or messaging us on social.
                </p>
                <CustomButton>Message Us</CustomButton>
            </section>
        </>
    )
}

export default Locations
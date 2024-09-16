import React from 'react'
import CustomButton from '../components/CustomButton/CustomButton'
import "./css/Home.css"

const Home = () => {
  return (
    <>
      <main className='home-main'>
        <h1 className="home-main-title">Scooter sharing made simple</h1>
        <div className="d-f jc-sb align-center" style={{ marginTop: "40px", marginRight: "288px" }}>
          <div><img src="/images/path1.svg" alt="path1" /></div>
          <div>
            <p className="home-main-desc">
              Scoot takes the hassle out of urban mobility. Our bikes are placed
              in convenient locations in each of our cities. Use our app to locate
              the nearest bike, unlock it with a tap, and you’re away!
            </p>
            <CustomButton>Get Scootin</CustomButton>
          </div>
          <div><img src="/images/path2.svg" alt="path2" /></div>
        </div>
        <div className="home-main-pagination d-f">
          <div className="pagination-item"></div>
          <div className="pagination-item"></div>
          <div className="pagination-item pagination-item__active"></div>
        </div>
      </main>
      <section className='home-features'>
        <div className="path-line"></div>
        <div className="home-features-box d-f">
          <div className="home-features-item">
            <div><img src="/images/features1.svg" alt="features1" /></div>
            <h3 className="features-item-title">Locate with app</h3>
            <p className="features-item-desc">
              Use the app to find the nearest scooter to you. We are continuously placing
              scooters in the areas with most demand, so one should never be too far away.
            </p>
          </div>
          <div className="home-features-item">
            <div><img src="/images/features2.svg" alt="features2" /></div>
            <h3 className="features-item-title">Pick your scooter</h3>
            <p className="features-item-desc">
              We show the most important info for the scooters closest to you.
              So you know how much charge they have left and can see roughly how much it will cost.
            </p>
          </div>
          <div className="home-features-item">
            <div><img src="/images/features3.svg" alt="features3" /></div>
            <h3 className="features-item-title">Enjoy the ride</h3>
            <p className="features-item-desc">
              Scan the QR code and the bike will unlock. Retract the cable lock, 
              put on a helmet, and you're off! Always lock bikes away from walkways 
              and accessibility ramps.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
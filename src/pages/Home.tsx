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
      <section className='home-about home-about-first d-f align-center'>
        <div>
          <h2 className="home-about-title">Easy to use riding telemetry</h2>
          <p className="home-about-desc">
            The Scoot app is available with riding telemetry. This means it can show
            you your average speed, how long you've been using the scooter, your traveling
            distance, and many more things all in an easy to use app.
          </p>
          <CustomButton>Learn More</CustomButton>
        </div>
        <div className="pos-r">
          <div><img src="/images/home-about1.png" alt="home-about1" /></div>
          <div className="home-about-mask"><img src="/images/blue-mask-right.png" alt="blue-mask-right" /></div>
          <div className="home-about-path"><img src="/images/path3.svg" alt="path3" /></div>
        </div>
      </section>
      <section className='home-about home-about-second d-f align-center'>
        <div className="pos-r">
          <div><img src="/images/home-about2.png" alt="home-about2" /></div>
          <div className="home-about-mask"><img src="/images/blue-mask-left.png" alt="blue-mask-left" /></div>
          <div className="home-about-path"><img src="/images/path4.svg" alt="path3" /></div>
        </div>
        <div>
          <h2 className="home-about-title">Coming to a city near you</h2>
          <p className="home-about-desc">
            Scoot is available in 4 major cities so far. We're expanding rapidly, so be sure
            to let us know if you want to see us in your hometown. We're aiming to let our
            scooters loose on 23 cities over the coming year.
          </p>
          <CustomButton>Learn More</CustomButton>
        </div>
      </section>
      <section className='home-about home-about-third d-f align-center'>
        <div>
          <h2 className="home-about-title">Zero hassle payments</h2>
          <p className="home-about-desc">
            Our payment is as easy as one two three. We accept most credit cards and debit cards. 
            You can also link your PayPal account inside the app. Need to pay later? No worries! 
            You can defer payment for up to a month.
          </p>
          <CustomButton>Learn More</CustomButton>
        </div>
        <div className="pos-r">
          <div><img src="/images/home-about3.png" alt="home-about3" /></div>
          <div className="home-about-mask"><img src="/images/blue-mask-right.png" alt="blue-mask-right" /></div>
          <div className="home-about-path"><img src="/images/path5.svg" alt="path5" /></div>
        </div>
      </section>
    </>
  )
}

export default Home
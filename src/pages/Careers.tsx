import React from 'react'
import './css/Careers.css'
import CustomButton from '../components/CustomButton/CustomButton'
import VacanciesList from '../components/VacanciesList/VacanciesList'
import VacanciesItem from '../components/VacanciesItem/VacanciesItem'

const Careers = () => {
    return (
        <>
            <main className='careers-main'>
                <h1 className="careers-main-title">Careers</h1>
            </main>
            <section className='careers-info d-f align-center'>
                <div>
                    <h2 className="careers-info-title">Care to join our mission?</h2>
                    <p className="careers-info-desc">
                        We're always looking for ambitious individuals to help us on our journey. 
                        If you're passionate about our mission to provide clean, accessible transport 
                        to improve urban living we want to hear from you!
                    </p>
                    <CustomButton>Say Hello</CustomButton>
                </div>
                <div className="pos-r">
                    <div><img src="/images/careers-info.png" alt="careers-info1" /></div>
                    <div className="careers-info-mask"><img src="/images/blue-mask-right.png" alt="blue-mask-right" /></div>
                    <div className='careers-info-path'><img src="/images/careers-path.png" alt="careers-path" /></div>
                </div>
            </section>
            <section className='careers-values'>
                <h3 className="careers-values-title">Why join us?</h3>
                <div className="careers-values-box d-f jc-sb">
                    <div className="careers-values-item">
                        <div className="values-item-main">
                            <div><img src="/images/about-values1.png" alt="about-values1" /></div>
                            <div className="values-item-num">01</div>
                        </div>
                        <h4 className="values-item-title">Our tech</h4>
                        <p className="values-item-desc">
                            We're using cutting edge technology to drive accessible urban transportation forward.
                            Our fully electric scooters are a joy to ride!
                        </p>
                    </div>
                    <div className="careers-values-item">
                        <div className="values-item-main">
                            <div><img src="/images/about-values2.png" alt="about-values2" /></div>
                            <div className="values-item-num">02</div>
                        </div>
                        <h4 className="values-item-title">Our integrity</h4>
                        <p className="values-item-desc">
                            We are fully committed to deliver a great yet safe, sustainable
                            micro-mobility experience in every city we serve.
                        </p>
                    </div>
                    <div className="careers-values-item">
                        <div className="values-item-main">
                            <div><img src="/images/about-values3.png" alt="about-values3" /></div>
                            <div className="values-item-num">03</div>
                        </div>
                        <h4 className="values-item-title">Our community</h4>
                        <p className="values-item-desc">
                            We support every community we serve. All workers are paid a living
                            wage based on their location and are Scoot employees.
                        </p>
                    </div>
                </div>
            </section>
            <section className='careers-vacancies d-f'>
                {
                    VacanciesList.map((vacancy)=> {
                        return (
                            <VacanciesItem
                                position={vacancy.position}
                                location={vacancy.location}
                            />
                        )
                    })
                }
            </section>
        </>
    )
}

export default Careers
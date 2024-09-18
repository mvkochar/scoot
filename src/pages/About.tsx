import React from 'react'
import './css/About.css'
import FaqItem from '../components/FaqItem/FaqItem'

const About = () => {
    return (
        <>
            <main className='about-main'>
                <h1 className="about-main-title">About</h1>
            </main>
            <section className='about-info about-info-first d-f align-center'>
                <div>
                    <h3 className="about-info-title">Mobility for the digital era</h3>
                    <p className="about-info-desc">
                        Getting around should be simple (and even fun!) for everyone. We embrace technology
                        to provide low cost, smart access to scooters at your fingertips.
                    </p>
                </div>
                <div className="pos-r">
                    <div><img src="/images/about-info1.png" alt="about-info1" /></div>
                    <div className="about-info-mask"><img src="/images/blue-mask-right.png" alt="blue-mask-right" /></div>
                    <div className='about-info-path'><img src="/images/about-path1.svg" alt="about-path1" /></div>
                </div>
            </section>
            <section className='about-info about-info-second d-f align-center'>
                <div className="pos-r">
                    <div><img src="/images/about-info1.png" alt="about-info1" /></div>
                    <div className="about-info-mask"><img src="/images/blue-mask-left.png" alt="blue-mask-left" /></div>
                    <div className='about-info-path'><img src="/images/about-path2.svg" alt="about-path2" /></div>
                </div>
                <div>
                    <h3 className="about-info-title">Better urban living</h3>
                    <p className="about-info-desc">
                        We're helping connect cities and bring people closer together. Our scooters are also fully-electric
                        and we offset the minimal carbon footprint for each ride.
                    </p>
                </div>
            </section>
            <section className='about-values'>
                <h3 className="about-values-title">Our values</h3>
                <div className="about-values-box d-f jc-sb">
                    <div className="about-values-item">
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
                    <div className="about-values-item">
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
                    <div className="about-values-item">
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
            <section className='about-faq'>
                <h3 className="about-faq-title">FAQs</h3>
                <div className="about-faq-content d-f">
                    <div className="about-faq-bl d-f jc-sb">
                        <h4 className="faq-bl-title">How it works</h4>
                        <div className="faq-block-box d-f">
                            <FaqItem
                                question='How do I download the app?'
                                answer='To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.'
                            />
                            <FaqItem
                                question='Can I find a nearby Scoots?'
                                answer='Nullam urna lectus, condimentum ac vulputate ac, dictum quis eros. Donec id ornare sapien, sit amet rhoncus leo. Mauris in congue elit. Nunc ultrices, lorem vitae ultrices ultricies, quam lacus scelerisque neque, vitae fringilla diam orci sed ligula. Nulla condimentum felis et sollicitudin varius. Orci.'
                            />
                            <FaqItem
                                question='Do I need a license to ride?'
                                answer='Donec pretium laoreet ligula eu eleifend. Mauris blandit porta interdum. Praesent at purus faucibus, sodales velit id, ornare eros. Vestibulum quis molestie velit. Morbi id iaculis dolor. Fusce at blandit libero, ut sollicitudin quam. Nulla sed justo fringilla, fermentum urna id, consectetur eros. Morbi aliquam.'
                            />
                        </div>
                    </div>
                    <div className="about-faq-bl d-f jc-sb">
                        <h4 className="faq-bl-title">Safe driving</h4>
                        <div className="faq-block-box d-f">
                            <FaqItem
                                question='Should I wear a helmet?'
                                answer='Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.'
                            />
                            <FaqItem
                                question='How about the rules & regulations?'
                                answer='Aliquam tristique enim elit, a dignissim dolor scelerisque non. Etiam finibus arcu vitae semper laoreet. Nulla vestibulum, mi vel venenatis mattis, risus tellus pellentesque turpis, eu lacinia mauris lorem in est. Nullam risus quam, tincidunt nec risus at, dapibus ultrices neque. Mauris sit amet maximus.'
                            />
                            <FaqItem
                                question='What if I damage my Scoot?'
                                answer='Donec magna mauris, sollicitudin at velit quis, ornare sagittis nulla. Duis non enim quis odio lacinia egestas. Vivamus quis tellus eget diam laoreet faucibus. Phasellus tristique lorem id velit ullamcorper, nec pharetra dolor elementum. Nunc semper, turpis eget vulputate ultricies, metus tellus finibus dui, eget.'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
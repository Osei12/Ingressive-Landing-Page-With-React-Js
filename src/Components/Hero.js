import React, { Component } from 'react'
import './GlobalStyle.css'

class Hero extends Component {
    render() {
        return (
            <div>
                <section className="container hero row">
                    <div className="content">
                        <h1>Lend a Hand</h1>
                        <p>Together we can build strength, stability,<br />
                            and self reliance in African tech talents.
                        </p>
                        <div className="hero-butons row">
                            <a href="#" className="btn">Donate Now</a>
                            <a style={{ display: 'flex' }} href="#">
                                <img src="assets/images/play (1).png" alt />
                                <h4>Watch Now</h4>
                            </a>
                        </div>
                        <div className="media-images row container">
                            <img src="assets/images/datacamp-5f96b2ffd0ddc.webp" alt />
                            <img src="assets/images/datacamp-5f96b2ffd0ddc.webp" alt />
                            <img src="assets/images/datacamp-5f96b2ffd0ddc.webp" alt />
                        </div>
                    </div>
                    <div className="img">
                        <img src="assets/images/hero-image.png" alt />
                        <span />
                    </div>
                </section>

            </div>
        )
    }
}

export default Hero
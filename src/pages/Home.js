import React, { Component } from 'react'
import Hero from '../Components/Hero'
import NavBar from '../Components/NavBar'
import "./Home.css"

class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Hero />
            </div>
        )
    }
}

export default Home
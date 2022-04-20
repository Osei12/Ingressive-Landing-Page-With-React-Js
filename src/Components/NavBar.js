import React, { Component, Fragment } from 'react'
import './GlobalStyle.css'

class NavBar extends Component {
    toggleMenu() {
        const toggleMenu = document.querySelector(".toggleMenu");
        const navigation = document.querySelector(".navigation");
        toggleMenu.classList.toggle("active");
        navigation.classList.toggle("active");
    }

    render() {
        return (
            <Fragment>
                <header className="container row">
                    <a href="#" className="logo">
                        <img src="assets/images/I4G-Icon-Color-985x1024.png" alt />
                        <h3 className="title-show">Ingressive <br /> For Good</h3>
                    </a>
                    <h3>Ingressive <br /> For Good</h3>
                    <nav className="navigation row">
                        <ul className="primary-list row">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Updates</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                        <ul className="secondary-list row">
                            <li><a href="#">Donate</a></li>
                            <li><a href="#">Community</a></li>
                        </ul>
                    </nav>
                    <div className="toggleMenu" onClick={this.toggleMenu}>
                        <svg className="menu" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M87.5 75H37.5V66.6667H87.5V75ZM87.5 54.1667H12.5V45.8333H87.5V54.1667ZM87.5 33.3333H37.5V25H87.5V33.3333Z" fill="black" />
                        </svg>
                    </div>
                </header>


            </Fragment >

        )
    }
}

export default NavBar
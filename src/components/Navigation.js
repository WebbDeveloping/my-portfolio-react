import React from 'react'
import burger from '../styles/images/burger.svg'
import '../styles/navigation.css'

export default function Navigation() {
    return (
        <div className="fixed-nav">

            <div className="navigation-wrap">
                <div className="navbar"></div>
                <div className="navigation-mobile">
                    <div className="navigation-container-mobile">
                        <a href="/" className="nav-brand"><h1 className="logo-text">Joe Webb</h1></a>
                        <nav className="mobile-nav-menu">
                            <a href="/" className="mobile-nav-link">About</a>
                            <a href="/" className="mobile-nav-link">Projects</a>
                            <a href="/" className="mobile-nav-link">Contacts</a>
                        </nav>
                        <div class="icon-one">
                            <div class="hamburger hamburger-one"><img className='burger' alt="brand logo" src={burger} /></div>
                        </div>
                    </div>
                    <div className="w-nav-overlay"></div>
                </div>
            </div>
        </div>

    )
}

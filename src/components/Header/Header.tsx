import React from 'react'
import './Header.css'
import CustomButton from '../CustomButton/CustomButton'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header d-f jc-sb align-center'>
            <div className='d-f align-center'>
                <div> <Link to="/"><img src="/images/logo.svg" alt="Logo" /></Link></div>
                <nav>
                    <ul className="header-nav d-f">
                        <li><Link to="/about">About</Link></li>
                        <li><a href="">Location</a></li>
                        <li><a href="">Careers</a></li>
                    </ul>
                </nav>
            </div>
              <CustomButton>Get Scootin</CustomButton>
        </header>
    )
}

export default Header
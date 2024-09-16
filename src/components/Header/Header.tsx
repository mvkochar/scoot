import React from 'react'
import './Header.css'
import CustomButton from '../CustomButton/CustomButton'

const Header = () => {
    return (
        <header className='header d-f jc-sb align-center'>
            <div className='d-f align-center'>
                <div><img src="/images/logo.svg" alt="Logo" /></div>
                <nav>
                    <ul className="header-nav d-f">
                        <li><a href="">About</a></li>
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
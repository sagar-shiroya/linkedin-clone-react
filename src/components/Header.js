import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <div className='header'>
            {/* Header Left: Logo + Search Bar */}
            <div className="header__left">
                {/* LinkedIn Logo */}
                <img 
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC45OCAzLjVjMCAxLjM4MS0xLjExIDIuNS0yLjQ4IDIuNXMtMi40OC0xLjExOS0yLjQ4LTIuNWMwLTEuMzggMS4xMS0yLjUgMi40OC0yLjVzMi40OCAxLjEyIDIuNDggMi41em0uMDIgNC41aC01djE2aDV2LTE2em03Ljk4MiAwaC00Ljk2OHYxNmg0Ljk2OXYtOC4zOTljMC00LjY3IDYuMDI5LTUuMDUyIDYuMDI5IDB2OC4zOTloNC45ODh2LTEwLjEzMWMwLTcuODgtOC45MjItNy41OTMtMTEuMDE4LTMuNzE0di0yLjE1NXoiLz48L3N2Zz4=" alt="" />

                {/* LinkedIn Search Bar */}
                <div className="header__search">
                    {/* SearchIcon */}
                    <SearchIcon />

                    {/* Input Text Bar */}
                    <input type="text" />
                </div>
            </div>

            {/* Header Right */}
            <div className="header__right">
                {/* TODO */}
            </div>
        </div>
    )
}

export default Header

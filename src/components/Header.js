import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
    return (
        <div className='header'>
            {/* Header Left: Logo + Search Bar */}
            <div className="header__left">
                {/* LinkedIn Logo */}
                <img 
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMTEgMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTYtMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5eiIvPjwvc3ZnPg==" alt="" />

                {/* LinkedIn Search Bar */}
                <div className="header__search">
                    {/* SearchIcon */}
                    <SearchIcon />

                    {/* Input Text Bar */}
                    <input type="text" />
                </div>
            </div>

            {/*  {/* Header Right Icons & Text underneath e.g. Home, My Network, Jobs etc. */}
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={PeopleIcon} title='My Network' />
                <HeaderOption Icon={WorkIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption title='Me' avatar='https://media-exp1.licdn.com/dms/image/C5603AQEgXrSsg-5I4g/profile-displayphoto-shrink_400_400/0/1543072699529?e=1645056000&v=beta&t=3rDbTMtBcTUgqneHRqIlUe2zwYLNOoYQHmuAls20uSI' />
            </div>
        </div>
    )
}

export default Header

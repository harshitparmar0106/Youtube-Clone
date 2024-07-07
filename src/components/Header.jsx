import React from 'react'
import style from './header.module.css'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import myimg from '../components/HARSHIT_PASSPORT_IMG.jpg'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';




function Header() {
  return (
    <div className={style.container}>
            <div className={style.left}>
                <MenuSharpIcon/>
                <img className={style.header_logo} src="https://www.logo.wine/a/logo/YouTube/YouTube-White-Dark-Background-Logo.wine.svg" alt="" />
            </div>
            <div className={style.middle_container}>

                <div className={style.middle}>
                    
                    <input type="text" name="" className={style.search_field} placeholder='Search' />
                    <div className={style.search_icon_div}>
                    <SearchIcon className= {style.search_icon} />
                    </div>
                </div>
                <div className= {style.search_icon_voice}>
                    <KeyboardVoiceIcon />
                </div>
            </div>
            <div className={style.right}>
          

                <VideoCallIcon className={style.icon}/>
                <AppsIcon  className={style.icon}/>
                <NotificationsIcon  className={style.icon}/>
                <Avatar alt="myimg" src={myimg} className={style.profile_img}  />
             </div>
    </div>
  )
}

export default Header

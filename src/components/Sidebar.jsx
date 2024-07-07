import React from 'react'
import style from '../components/sidebar.module.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import SubscriptionsIcon from  '@mui/icons-material/Subscriptions';





const Sidebar = () => {

  return (
    <div className={style.sidebar_container}>
      <SidebarRow selected={true} Icon ={ HomeIcon} title="Home"/>
      <SidebarRow selected={false} Icon = {SubscriptionsIcon} title="Trending"/>
      <SidebarRow selected={false} Icon={WhatshotIcon}title="Subscription"/>
      <div className={style.line}></div>
      <SidebarRow selected={false} Icon={VideoLibraryIcon}title="Library"/>
      <SidebarRow selected={false} Icon={HistoryIcon}title="Histroy"/>
      <SidebarRow selected={false} Icon={OndemandVideoIcon}title="Your Videos"/>
      <SidebarRow selected={false} Icon={WatchLaterIcon}title="Watch Later"/>
      <SidebarRow selected={false} Icon={ThumbUpAltOutlinedIcon}title="Liked"/>
      <SidebarRow selected={false} Icon={ExpandMoreOutlinedIcon}title="Show More"/>
      <div className={style.line}></div>





    </div>
  )
}

export default Sidebar

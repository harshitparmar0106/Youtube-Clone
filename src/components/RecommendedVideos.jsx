import { styled } from '@mui/material'
import style from './recommendedVideos.module.css'

const RecommendedVideos = () => {
  return (
    <div className={style.recommendedVideos_container}>
        <div className={style.filters}>
            <span>All</span>
            <span>Shorts</span>
            <span>Videos</span>
            <span>Unwatched</span>
            <span>Trending</span>
            <span>Games</span>

        </div>
      
    </div>
  )
}

export default RecommendedVideos

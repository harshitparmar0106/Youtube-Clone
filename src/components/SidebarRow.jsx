import React from 'react'
import style from './sidebarRow.module.css'


const SidebarRow = ({ title, Icon, selected }) => {
  
  const containerStyle = selected
    ? [style.sidebarRow, style.selected].join(" ")
    : style.sidebarRow

  return (
    <div className={containerStyle}>
        <Icon className={style.sidebarRow_icon}/>
        <h2 className={style.sidebarRow_title}>{title}</h2>
    </div>
  )
}

export default SidebarRow

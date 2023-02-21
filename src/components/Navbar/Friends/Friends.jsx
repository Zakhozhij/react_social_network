import React from 'react';
import s from './Friends.module.css'
const Friends = (props) => {
  return (
    
    <div className={s.friends}>
          <img src={props.avatar} title={props.name}/>
    </div>
  )
}
export default Friends;
import React from 'react';
import s from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';
const DialogItem = (props) => {
  let path='/dialogs/'+props.id;
  return (
    <div className={s.dialog}>
        <NavLink to={path} className={(navData) => (navData.isActive ? s.activeLink : 'none')}>
          <div><img src={props.avatar} /></div>
          <div className={s.userName}>{props.name}</div>
        </NavLink>
    </div>
  );
}

export default DialogItem;
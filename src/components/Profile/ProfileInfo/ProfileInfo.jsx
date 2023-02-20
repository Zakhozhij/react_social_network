import React from 'react';
import s from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src='https://img.freepik.com/free-vector/night-ocean-landscape-full-moon-stars-shine_107791-7397.jpg' />
      </div>
      <div className={s.descriptionBlock}>
        ava+discription
      </div>
    </div>
  );
}

export default ProfileInfo;
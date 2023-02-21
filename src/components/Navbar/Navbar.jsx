import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import ReactSimplyCarousel from 'react-simply-carousel';


const Navbar = (props) => {
  let yourFriends = props.state.friends.map(d => <Friends avatar={d.avatar} name={d.name} id={d.id} />);
  //let yourFriends = props.state.friends.map(d=> ({url:d.avatar}));
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile' className={(navData) => (navData.isActive ? s.activeLink : 'none')} >Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs' className={(navData) => (navData.isActive ? s.activeLink : 'none')}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' className={(navData) => (navData.isActive ? s.activeLink : 'none')}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' className={(navData) => (navData.isActive ? s.activeLink : 'none')}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/settings' className={(navData) => (navData.isActive ? s.activeLink : 'none')}>Settings</NavLink>
      </div>
      <div className={s.friends}>
          <ReactSimplyCarousel
            activeSlideIndex={1}
            itemsToShow={3}
            itemsToScroll={1}
            forwardBtnProps={{
            //   //here you can also pass className, or any other button element attributes
              style: {
                display: 'none',
            //     background: 'black',
            //     border: 'none',
            //     borderRadius: '50%',
            //     color: 'white',
            //     cursor: 'pointer',
            //     fontSize: '20px',
            //     height: 20,
            //     lineHeight: 1,
            //     textAlign: 'center',
            //     width: 20,
              },
            //   children: <span>{`>`}</span>,
            }}
            backwardBtnProps={{
            //   //here you can also pass className, or any other button element attributes
                style: {
                display: 'none',
            //     background: 'black',
            //     border: 'none',
            //     borderRadius: '50%',
            //     color: 'white',
            //     cursor: 'pointer',
            //     fontSize: '20px',
            //     height: 20,
            //     lineHeight: 1,
            //     textAlign: 'center',
            //     width: 20,
              },
            //   children: <span>{`<`}</span>,
            }}
            responsiveProps={[
              {
                itemsToShow: 4,
                itemsToScroll: 1,
              },
            ]}
            autoplay={true}
            autoplayDelay={100}
            infinite={true}
            speed={400}
            easing="linear"
            >
              
              {yourFriends}
              
          </ReactSimplyCarousel>
      </div>
    </nav>
  );
}

export default Navbar;
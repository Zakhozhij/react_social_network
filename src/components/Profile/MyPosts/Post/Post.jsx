import React from 'react';
import s from './Post.module.css'
const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://www.seekpng.com/png/detail/0-8585_share-this-article-skull-logo-transparent-background.png' />
        {props.message}
      <div>{props.likesCount}</div>
    </div>
  );
}

export default Post;
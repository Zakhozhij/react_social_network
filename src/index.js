import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Profile from './data/Profile'

let posts = [
  {
      id: 1,
      message: 'Hi',
      likesCount:3
  },
  {
      id: 2,
      message: 'How are you?',
      likesCount:2
  },
  {
      id: 3,
      message: 'Where are you?',
      likesCount:32
  },
  {
      id: 4,
      message: 'Who are you?',
      likesCount:5
  },
  {
      id: 5,
      message: 'Why are you?',
      likesCount:1
  }
];

let dialogs = [
  {
      id: 1,
      name: 'Dimych'
  },
  {
      id: 2,
      name: 'Max'
  },
  {
      id: 3,
      name: 'Igor'
  },
  {
      id: 4,
      name: 'Semen'
  },
  {
      id: 5,
      name: 'Alena'
  }
];

let messages = [
  {
      id: 1,
      message: 'Hi'
  },
  {
      id: 2,
      message: 'How are you?'
  },
  {
      id: 3,
      message: 'Where are you?'
  },
  {
      id: 4,
      message: 'Who are you?'
  },
  {
      id: 5,
      message: 'Why are you?'
  }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

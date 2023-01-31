import TodoAppGif from './TodoAppGif.gif';
import React from 'react';
import { Link } from 'react-router-dom';
import './css/front.css'
const FrontPage = () => {
  return (
    <div className='container'>
      <img src={TodoAppGif} alt="gif background" className='gif' />
      <h1 className='header'>Welcome to Todo App</h1>
      <p className='text'>This is a simple todo app that helps you keep track of your tasks</p>
      <Link to="/todoApp">
        <button className='switch'>Go to Todo App</button>
      </Link>
    </div>
  );
};

export default FrontPage;

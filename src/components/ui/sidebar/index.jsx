

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className='sidebar'>
      <h1>Sidebar</h1>
      <NavLink to="/main" className="navlink" activeClassName={pathname === "/hjk" ? "active" : ""}>
        Posts
      </NavLink>
      <NavLink to="/main/comments" className="navlink" activeClassName={pathname === "/main/comments" ? "active" : ""}>
        Comments
      </NavLink>
      <NavLink to="/main/albums" className="navlink" activeClassName={pathname === "/main/albums" ? "active" : ""}>
        Albums
      </NavLink>
      <NavLink to="/main/photos" className="navlink" activeClassName={pathname === "/main/photos" ? "active" : ""}>
        Photos
      </NavLink>
      <NavLink to="/main/todos" className="navlink" activeClassName={pathname === "/main/todos" ? "active" : ""}>
        Todos
      </NavLink>
      <NavLink to="/main/users" className="navlink" activeClassName={pathname === "/main/users" ? "active" : ""}>
        Users
      </NavLink>
    </div>
  );
};

export default Sidebar;


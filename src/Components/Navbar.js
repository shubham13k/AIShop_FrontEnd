import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <b>AIShop</b>
        </NavLink>
        
      </div>
    </nav>
  );
};

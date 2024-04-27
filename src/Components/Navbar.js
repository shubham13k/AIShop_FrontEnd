import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = ({ handleFilter }) => {
  const [filter, setFilter] = useState('');

  const handleChangeFilter = (value) => {
    setFilter(value);
    handleFilter(value);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <b>AIShop</b>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Filter
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <button className="dropdown-item" onClick={() => handleChangeFilter('')}>
                    All
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => handleChangeFilter('face')}>
                    Face
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => handleChangeFilter('hand')}>
                    Hand
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => handleChangeFilter('finger')}>
                    Finger
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => handleChangeFilter('foot')}>
                    Foot
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => handleChangeFilter('leg')}>
                    Leg
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

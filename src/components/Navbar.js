import React from 'react';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div
          className="navbar-brand"
          style={{ color: 'white', cursor: 'pointer' }}
        >
          {' '}
          English and French Translation App
        </div>
      </nav>
    </div>
  );
}

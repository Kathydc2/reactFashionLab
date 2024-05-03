import React from 'react';

function Nav(props) {
  return (
    <nav aria-label="Main Navigation" role="navigation">
      <ul className='nav'>
        {props.nav.map((option, idx) => (
          <li key={idx} className='navLi'>
            <a href="#" className='navAnchor'>{option}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
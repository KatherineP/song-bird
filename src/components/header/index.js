import React from 'react';
import './header.css';
import { categories } from '../../config';

const Header = ({ gameLevel, totalScore }) => {
  return (
    <div>
      <div className="header d-flex justify-content-between">
        <h1>SongBird</h1>
        <h5 className="align-self-center">Score: {totalScore}</h5>
      </div>
      <HeaderMenu gameLevel={gameLevel} />
    </div>
  );
};

const HeaderMenu = ({ gameLevel }) => {
  return (
    <div className="pagination justify-content-center">
      <ul className="nav nav-pills">
        {categories.map((category, idx) => {
          return (
            <li className="nav-item" key={category}>
              <a
                className={idx === gameLevel ? 'nav-link active' : 'nav-link'}
                href="/#"
              >
                {category}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Header };

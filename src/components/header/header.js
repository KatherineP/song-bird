import React from 'react'
import './header.css'

const Header = ({ gameLevel, totalScore }) => {
  const categories = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 
  'Хищные птицы', 'Морские птицы'];

  const menu = categories.map((category, idx) => {
    if(idx === gameLevel){
      return (
        <li className="nav-item" key={category}>
          <a className="nav-link active" href="/#">{category}</a>
        </li>
      )
    } else {
      return (
        <li className="nav-item" key={category}>
          <a className="nav-link" href="/#">{category}</a>
        </li>
      )
    }
  })

  return (
    <div>
      <div className = "header d-flex justify-content-between">
        <h1>SongBird</h1>
        <h5 className = "align-self-center">Score: {totalScore}</h5>
      </div>
      <div className = "pagination justify-content-center">
        <ul className="nav nav-pills">
          {menu}
        </ul>
      </div>
    </div>
  )
}

export default Header
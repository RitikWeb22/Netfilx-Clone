import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.png'
import { ImSearch } from 'react-icons/im'
function Header() {
  return (
    <div className='header'>
      <img src={logo} alt='' />
      <div>
        <Link to='/tvshow'>Tv Shows</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/recent'>Recent Add</Link>
        <Link to='/mylist'>My List</Link>
      </div>
      <ImSearch />
    </div>
  )
}

export default Header

import React from 'react';
import MenuItems from './MenuItems';
import { AiFillHome } from 'react-icons/ai';
import { BsInfoCircleFill } from 'react-icons/bs';
function Header() {
  return (
    <div>
        <div>
            <MenuItems title="home" address="/" Icon={AiFillHome}/>
            <MenuItems title="about" address="/about" Icon={BsInfoCircleFill}/>
        </div>

        <div>
        <p>imdb</p>
        </div>

    </div>
  )
}

export default Header
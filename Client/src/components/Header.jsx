import React from 'react'

const Header = () => {
    return (
        <div>
            <ul className='flex justify-around items-center border-b-2 border-yellow-400 bg-black text-lg text-bold p-1 pt-2 pb-2 text-yellow-100'>
                <li><a href="#">Movies</a></li>
                <li><a href="#">TV Shows</a></li>
            </ul>
        </div>
    )
}

export default Header

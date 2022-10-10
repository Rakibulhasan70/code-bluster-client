import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className=' w-full mx-auto flex justify-around'>
                <Link to='/home'>Home</Link>
                <Link to='/add'>Add</Link>

            </div>
        </div>
    );
};

export default Header;
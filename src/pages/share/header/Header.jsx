import React from 'react';
import logo from '../../../../public/PetroCompany.png'
import { Link } from 'react-router-dom';
import ActiveLink from '../../../components/ActiveLink';
const Header = () => {
    return (
        <header className='sticky top-0 z-10'>
            <div className="navbar bg-base-100 w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    {/* set logo */}
                    <div className='Logo'>
                        <Link to='/' className="normal-case text-xl"><img src={logo} className='w-20 h-16' alt="" /></Link>
                        <p className='-mt-5 text-center text-xl text-[#157DEC] font-bold'>PETRO</p>
                    </div>
                </div>
                <div className=" hidden lg:flex">
                    <ul className=" px-1 flex space-x-5 font-semibold">
                        <li className='text-lg hover:text-blue-700'><ActiveLink to='/'>Home</ActiveLink></li>
                        <li className='text-lg hover:text-blue-700'><ActiveLink to='/shop'>Shop</ActiveLink></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-5">
                    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Login
                    </button>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Register
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
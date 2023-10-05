import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { navLinksdata } from './index';
import { FaBars, FaTimes } from 'react-icons/fa';
import pic from './myphoto.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`w-full bg-bodyColor sticky top-0 z-50 ${isOpen ? 'h-screen' : 'h-24 md:h-30'}`}>
            <div className=' border-b-[1px] border-b-gray-500  mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center py-3'>
                    <div className='flex-shrink-0 flex items-center'>
                        <img
                            className={`block h-20 w-auto rounded-[50px] md:block`}
                            src={pic}
                            alt='Logo'
                        />
                        {/* <span className='text-xl md:text-4xl font-bold text-white'>Portfolio</span> */}
                    </div>
                    <div className='hidden md:flex md:items-center md:space-x-6 lg:space-x-10'>
                        <ul className='flex space-x-6 lg:space-x-10'>
                            {navLinksdata.map(({ id, title, link }) => (
                                <li
                                    key={id}
                                    className='text-md font-medium text-gray-400 cursor-pointer hover:text-designColor duration-300'
                                >
                                    <Link
                                        activeClass='active'
                                        to={link}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='-mr-2 flex items-center md:hidden'>
                        <button
                            onClick={toggleMenu}
                            className='text-xl md:text-2xl text-gray-400 focus:outline-none'
                        >
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='px-2 pt-2 pb-3 space-y-1 bg-bodyColor'>
                    {navLinksdata.map(({ id, title, link }) => (
                        <Link
                            key={id}
                            activeClass='active'
                            to={link}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={() => setIsOpen(false)}
                            className='block px-3 py-2 rounded-md text-base font-normal text-gray-400 hover:text-designColor duration-300 hover:bg-[#202327]'
                        >
                            {title}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;

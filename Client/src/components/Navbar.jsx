import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/LOGO.jpg';
import mglass from '../assets/m-glass.svg';
import user from '../assets/user.svg';

const Navbar = ({ setSearchTerm }) => {
    const [searchClicked, setSearchClicked] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const searchRef = useRef(null);
    const navigate = useNavigate();

    const handleSearchClick = () => {
        setSearchClicked(true);
    };

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setSearchClicked(false);
        }
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        if (searchValue.trim() !== '') {
            setSearchTerm(searchValue);
            navigate(`/search?q=${searchValue}`);
        }
        setSearchClicked(false);
    };

    useEffect(() => {
        if (searchClicked) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [searchClicked]);

    return (
        <div className='bg-yellow-500 w-full h-14 flex items-center justify-between p-1
                        xl:border-2 xl:border-gray-300'>
            <div>
                <img className='w-11 h-11 rounded-full ml-1
                                xl:mx-16 xl:mr-32' src={logo} alt='logo' />
            </div>
            <div className='hidden xl:block xl:border-2 xl:border-gray-300 w-full text-2xl font-semibold text-center '><p>Movies Pro</p></div>
            <div className='flex items-center justify-between mx-2
                            xl:mx-16'>
                <div onClick={handleSearchClick}>
                    {!searchClicked ? (
                        <img className='w-6 h-9 mr-5 cursor-pointer
                                        xl:mx-5'
                            src={mglass} alt='mglass' />
                    ) : (
                        <form
                            ref={searchRef}
                            className={`flex justify-center items-center transition-opacity duration-3000 ${searchClicked ? 'opacity-100' : 'opacity-0'}`}
                            onSubmit={handleSearchSubmit}
                        >
                            <input
                                type='text'
                                placeholder='Search...'
                                className='w-2/3 px-2 py-1 border border-gray-300 rounded-md'
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}
                            />
                            <button type='submit' className='ml-2 mr-1 px-2 py-1 bg-black text-yellow-100 rounded-md'>
                                Go
                            </button>
                        </form>
                    )}
                </div>
                <div>
                    <img className='w-6 h-6 cursor-pointer' src={user} alt='user' />
                </div>
            </div>
        </div>
    );
};

export default Navbar;

// import React, { useState, useEffect, useRef } from 'react';
// import logo from '../assets/LOGO.jpg';
// import mglass from '../assets/m-glass.svg';
// import user from '../assets/user.svg';

// const Navbar = () => {
//     const [searchClicked, setSearchClicked] = useState(false);
//     const searchRef = useRef(null);

//     const handleSearchClick = () => {
//         setSearchClicked(true);
//     };

//     const handleClickOutside = (event) => {
//         if (searchRef.current && !searchRef.current.contains(event.target)) {
//             setSearchClicked(false);
//         }
//     };

//     const handleSearchSubmit = (event) => {
//         event.preventDefault();
//         setSearchClicked(false);
//     };

//     useEffect(() => {
//         if (searchClicked) {
//             document.addEventListener('mousedown', handleClickOutside);
//         } else {
//             document.removeEventListener('mousedown', handleClickOutside);
//         }
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [searchClicked]);

//     return (
//         <div className='bg-yellow-500 w-full h-13 flex items-center justify-between p-1'>
//             <div>
//                 <img className='w-11 h-11 rounded-full ml-1 ' src={logo} alt='logo' />
//             </div>
//             <div className='flex items-center justify-between mx-2'>
//                 <div onClick={handleSearchClick}>
//                     {!searchClicked ? (
//                         <img className='w-6 h-9 mr-5 cursor-pointer' src={mglass} alt='mglass' />
//                     ) : (
//                         <form
//                             ref={searchRef}
//                             className={`flex justify-center items-center transition-opacity duration-3000 ${searchClicked ? 'opacity-100' : 'opacity-0'}`}
//                             onSubmit={handleSearchSubmit}
//                         >
//                             <input
//                                 type='text'
//                                 placeholder='Search...'
//                                 className='w-2/3 px-2 py-1 border border-gray-300 rounded-md'
//                             />
//                             <button type='submit' className='ml-2 mr-1 px-2 py-1 bg-black text-yellow-100 rounded-md'>
//                                 Go
//                             </button>
//                         </form>
//                     )}
//                 </div>
//                 <div>
//                     <img className='w-6 h-6 cursor-pointer' src={user} alt='user' />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import logo from '../assets/LOGO.jpg';
// import mglass from '../assets/m-glass.svg';
// import user from '../assets/user.svg';

// const Navbar = ({ setSearchTerm }) => {
//     const [searchClicked, setSearchClicked] = useState(false);
//     const [searchValue, setSearchValue] = useState('');
//     const searchRef = useRef(null);
//     const navigate = useNavigate();

//     const handleSearchClick = () => {
//         setSearchClicked(true);
//     };

//     const handleClickOutside = (event) => {
//         if (searchRef.current && !searchRef.current.contains(event.target)) {
//             setSearchClicked(false);
//         }
//     };

//     const handleSearchSubmit = (event) => {
//         event.preventDefault();
//         if (searchValue.trim() !== '') {
//             setSearchTerm(searchValue);
//             navigate(`/search?q=${searchValue}`);
//         }
//         setSearchClicked(false);
//     };

//     useEffect(() => {
//         if (searchClicked) {
//             document.addEventListener('mousedown', handleClickOutside);
//         } else {
//             document.removeEventListener('mousedown', handleClickOutside);
//         }
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [searchClicked]);

//     return (
//         <div className='bg-yellow-500 w-full h-14 flex items-center justify-between p-1
//                         xl:border-2 xl:border-gray-300'>
//             <div>
//                 <img className='w-11 h-11 rounded-full ml-1
//                                 xl:mx-16 xl:mr-32' src={logo} alt='logo' />
//             </div>
//             <div className='hidden xl:block xl:border-2 xl:border-gray-300 w-full text-2xl font-semibold text-center '><p>Movies Pro</p></div>
//             <div className='flex items-center justify-between mx-2
//                             xl:mx-16'>
//                 <div onClick={handleSearchClick}>
//                     {!searchClicked ? (
//                         <img className='w-6 h-9 mr-5 cursor-pointer
//                                         xl:mx-5'
//                             src={mglass} alt='mglass' />
//                     ) : (
//                         <form
//                             ref={searchRef}
//                             className={`flex justify-center items-center transition-opacity duration-3000 ${searchClicked ? 'opacity-100' : 'opacity-0'}`}
//                             onSubmit={handleSearchSubmit}
//                         >
//                             <input
//                                 type='text'
//                                 placeholder='Search...'
//                                 className='w-2/3 px-2 py-1 border border-gray-300 rounded-md'
//                                 value={searchValue}
//                                 onChange={(e) => setSearchValue(e.target.value)}
//                             />
//                             <button type='submit' className='ml-2 mr-1 px-2 py-1 bg-black text-yellow-100 rounded-md'>
//                                 Go
//                             </button>
//                         </form>
//                     )}
//                 </div>
//                 <div>
//                     <img className='w-6 h-6 cursor-pointer' src={user} alt='user' />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

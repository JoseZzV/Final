import { Link } from 'react-router-dom';
import { GiCurvyKnife } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useState } from 'react';

const Nav: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  function openMenu() {
    setToggle(true);
  }

  function closeMenu() {
    setToggle(false);
  }

  function handleLinkClick() {
    setToggle(false);
  }

  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row bg-black">
        <div>
          <Link to="/" className="text-white font-mono text-3xl tracking-wider flex items-center">
            <GiCurvyKnife /> Carecortada
          </Link>
        </div>
        <div className="space-x-4">
          <div className='ssm:hidden lg:block space-x-2'>
            <Link to="/models" onClick={handleLinkClick} className="text-white hover:bg-gray-500 rounded-full px-5 py-2 text-xl">Models</Link>
            <Link to="/makeup" onClick={handleLinkClick} className="text-white hover:bg-gray-500 rounded-full px-5 py-2 text-xl">Makeup</Link>
            <Link to="/fashion-events" onClick={handleLinkClick} className="text-white hover:bg-gray-500 rounded-full px-5 py-2 text-xl">Fashion Events</Link>
            <Link to="/photo-sales" onClick={handleLinkClick} className="text-white hover:bg-gray-500 rounded-full px-5 py-2 text-xl">Photo Sales</Link>
            <Link to="/contact-us" onClick={handleLinkClick} className="text-white hover:bg-gray-500 rounded-full px-5 py-2 text-xl">Contact Us</Link>
          </div>
          <div className='ssm:block lg:hidden'>
            {toggle ? (
              <AiOutlineClose onClick={closeMenu} size={30} className='text-white cursor-pointer' />
            ) : (
              <HiMenuAlt1 onClick={openMenu} size={30} className='text-white hover' />
            )}
          </div>
        </div>
      </div>

      <div className='ssm:block lg:hidden bg-black'>
        {toggle ? (
          <div className='flex justify-between ml-10'>
            <ul>
              <li className='text-white text-xl mb-2 cursor-pointer'>
                <Link to="/models" onClick={handleLinkClick}>Models</Link>
              </li>
              <li className='text-white text-xl mb-2 cursor-pointer'>
                <Link to="/makeup" onClick={handleLinkClick}>Makeup</Link>
              </li>
              <li className='text-white text-xl mb-2 cursor-pointer'>
                <Link to="/fashion-events" onClick={handleLinkClick}>Fashion Events</Link>
              </li>
              <li className='text-white text-xl mb-2 cursor-pointer'>
                <Link to="/photo-sales" onClick={handleLinkClick}>Photo Sales</Link>
              </li>
              <li className='text-white text-xl mb-2 cursor-pointer'>
                <Link to="/contact-us" onClick={handleLinkClick}>Contact Us</Link>
              </li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default Nav;
import { GrAd } from 'react-icons/gr';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';
import { useState } from 'react';

const Nav: React.FC = () => {

const [toggle, setToggle] = useState(false);

function openMenu(){
    setToggle(true);
}

function closeMenu(){
    setToggle(false);
}

function handleLinkClick() {
    setToggle(false);
}
    return (
        <>
            <div className="flex items-center justify-between p-10 lg:flex-row  bg-black
        ">
                <div >
                    <a href="#" className="text-white font-mono text-3xl
                tracking-wider flex items-center"><GrAd/>ZV</a>
                </div>
                <div className="space-x-4">
                    <div className='ssm:hidden lg:block space-x-2'>
                        <a href="#Proyects" onClick={handleLinkClick} className="text-white hover:bg-gray-500
                rounded-full px-5 py-2 text-xl">Projects</a>
                        <a href="#skills" onClick={handleLinkClick} className="text-white hover:bg-gray-500
                rounded-full px-5 py-2 text-xl">Skills</a>
                        <a href="#footer" className="text-white hover:bg-gray-500
                rounded-full px-5 py-2 text-xl">Contact Me</a>
                    </div>
                    <div className='ssm:block lg:hidden'>
                        {toggle ? (
                            <AiOutlineClose onClick={closeMenu} size={30} 
                            className='text-white cursor-pointer' />
                        ):(<HiMenuAlt1 onClick={openMenu} size={30} className='text-white hover'/>)}
                        
                    </div>
                </div>
            </div>

            <div className='ssm:block lg:hidden bg-black' >
                {toggle ? (
                    <div className='flex justify-between ml-10'>
                    <ul>
                        <li className='text-white text-x;l mb-2 
                        cursor-pointer'>Projects</li>
                        <li className='text-white text-x;l mb-2 
                        cursor-pointer'>Skills</li>
                        <li className='text-white text-x;l mb-2 
                        cursor-pointer'>Contact Me</li>
                    </ul>
                </div>

                ):(
                    <div></div>

                )}
                
            </div>
        </>
    )
}

export default Nav;
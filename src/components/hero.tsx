import { BsInstagram, BsGithub } from 'react-icons/bs';
import { FaXTwitter } from "react-icons/fa6";
import HeroPic from '../assets/WhatsApp Image 2024-08-08 at 9.21.19 PM.jpeg';


const hero: React.FC = () => {
    return(
        <section className='flex justify-around items-center p-10 space-x-10
        lg:flex-row ssm:flex-col ssm: space-y-10 text-white'>
            <div className='lg:w-1/3 ssm:w-fit'>
                <p className='text-4xl mb-5 text-slate-300'>I'm</p>
                <h1 className='text-6xl'>Jose David Zuluaga</h1>
                <hr />
                <p className='mt-10 text-slate-300 font sans'>
                Student of Systems Engineering and Computing at EIA University, constantly exploring new 
                technologies and learning opportunities. 
                Passionate about staying updated with the latest advancements 
                in tech and eager to apply knowledge in innovative ways.
                </p>
            </div>
            <div className='w-1/3 items-center ssm:w-fit'>
                <img src={HeroPic} alt="" width={100} height={100} 
                className='rounded-full w-full border-8 border-white'/>
            </div>
            <div className='w-1/3 ssm: w-fit'>
                <p className='text-4xl mb-4 font sans'>About Me</p>
                <p className='text-slate-300'>
                One of my greatest passions is systems, but I also have other interests.
                </p>
                <button className='bg-white text-black px-10 py-2 my-3
                rounded-full hover:bg-black hover:text-white '>
                  <a href="#aboutme">Show More...</a>
                </button>
                <div className='flex mt-5 space-x-4 cursor-pointer'>
                <a href="https://github.com/JoseZzV" target="_blank" rel="noopener noreferrer">
                    <BsGithub size={40} className='border-4 
                    hover:border-black rounded-full'/>
                    </a>

                    <a href="https://x.com/Elkbzon1" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter size={40} />
                    </a>
                    <a href="https://instagram.com/josezv15" target="_blank" rel="noopener noreferrer">
                        <BsInstagram size={40} className='border-4 
                        hover:border-black rounded-full'/>
                    </a>
                </div>
            </div>
            
        </section>
    )
}

export default hero
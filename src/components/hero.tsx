import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { AiFillYoutube } from 'react-icons/ai';
import HeroPic from '../assets/andrea_mesa.jpg';

const Hero: React.FC = () => {
  return (
    <section className='flex flex-col lg:flex-row justify-around items-center p-10 space-y-10 lg:space-x-10 lg:space-y-0 min-h-screen text-white bg-black'>
      {/* Texto de bienvenida */}
      <div className='lg:w-1/3 w-full text-center lg:text-left'>
        <p className='text-4xl mb-5 text-slate-300'>Welcome to</p>
        <h1 className='text-6xl font-bold'>La Care Cortada</h1>
        <hr className='my-4 border-slate-500' />
        <p className='mt-6 text-slate-300'>
          Andrea Mesa's exclusive makeup and fashion brand where elegance meets mystery. 
          Renowned for stunning looks and daring fashion, but there's more behind the scenes...
        </p>
      </div>

      {/* Imagen */}
      <div className='lg:w-1/3 w-2/3'>
        <img src={HeroPic} alt="Andrea Mesa" 
          className='rounded-full w-full border-8 border-white' />
      </div>

      {/* Información adicional y botones */}
      <div className='lg:w-1/3 w-full text-center lg:text-left'>
        <p className='text-4xl mb-4'>About Us</p>
        <p className='text-slate-300'>
          La Care Cortada isn't just a brand; it's a lifestyle. Bold, unapologetic, and with a touch of secrecy. 
          Ready to explore the hidden world of high fashion and discreet dealings?
        </p>
        <button className='bg-white text-black px-10 py-2 my-4 rounded-full hover:bg-black hover:text-white transition'>
          <a href="/notfound">Show More...</a>
        </button>

        {/* Iconos sociales */}
        <div className='flex justify-center lg:justify-start mt-5 space-x-4'>
          <a href="/notfound" target="_blank" rel="noopener noreferrer">
            <BsInstagram size={40} className='border-4 hover:border-black rounded-full' />
          </a>
          <a href="/notfound" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={40} />
          </a>
          <a href="/notfound" target="_blank" rel="noopener noreferrer">
            <BsLinkedin size={40} className='border-4 hover:border-black rounded-full' />
          </a>
          <a href="/notfound" target="_blank" rel="noopener noreferrer">
            <FaPinterest size={40} />
          </a>
          <a href="/notfound" target="_blank" rel="noopener noreferrer">
            <AiFillYoutube size={40} className='border-4 hover:border-black rounded-full' />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
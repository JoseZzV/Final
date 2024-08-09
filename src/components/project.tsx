import SistEmg from '../assets/SistEmg..png';
import SistNut from '../assets/SistNut.jpg';

export default function Project() {
    return (
        <div id="Proyects" className='bg-gray-600 p-5 sm:p-20 max-w-full'>
            <div className='grid justify-items-center mb-10'>
                <h1 className='text-3xl text-white'>Projects</h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {/* Proyecto 1 */}
                <div className='bg-white rounded-2xl shadow-md overflow-hidden hover:animate-pulse'>
                    <div className='flex flex-col sm:flex-row'>
                        <div className='p-4 sm:p-8 flex-1'>
                            <div className='uppercase tracking-wide text-sm text-gray-500 font-semibold'>
                                Medellin Emergency System
                            </div>
                            <a className='text-blue-500'>Mapbox GL JS,HTML,Python</a>
                            <p className='mt-2 text-slate-500'>
                            This project developed a system designed to assist the people of Medellín 
                            during emergencies by facilitating their access to help and resources.
                            </p>
                        </div>
                        <div className='p-4 sm:p-5 flex justify-center items-center'>
                            <img src={SistEmg} alt="Medellin Emergency System" className='w-full sm:w-48 h-auto object-cover' />
                        </div>
                    </div>
                </div>

                {/* Proyecto 2 */}
                <div className='bg-white rounded-2xl shadow-md overflow-hidden hover:animate-pulse'>
                    <div className='flex flex-col sm:flex-row'>
                        <div className='p-4 sm:p-5 flex justify-center items-center'>
                            <img src={SistNut} alt="Nutrition System" className='w-full sm:w-48 h-auto object-cover' />
                        </div>
                        <div className='p-4 sm:p-8 flex-1'>
                            <div className='uppercase tracking-wide text-sm text-gray-500 font-semibold'>
                                Nutrition System
                            </div>
                            <a className='text-blue-500 '>Java</a>
                            <p className='mt-2 text-slate-500'>
                            This project aimed to create nutrition plans and recipes, 
                            leveraging the tools provided by Java.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

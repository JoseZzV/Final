import Sk from "../assets/Sk.png";
import Sk4 from "../assets/sk4.png";
import Sk6 from "../assets/sk6.jpg";
import Sk3 from "../assets/Sk3.png";

export default function Skills() {
    return (
        <div id="Skills" className='bg-gray-600 p-5 sm:p-20 max-w-full'>
            <div className='grid justify-items-center mb-10'>
                <h1 className='text-3xl text-white'>Skills</h1>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='bg-white rounded-2xl shadow-md overflow-hidden hover:animate-pulse'>
                    <div className='flex flex-col sm:flex-row'>
                        <div className='p-4 sm:p-8 flex-1'>
                            <div className='uppercase tracking-wide text-sm text-gray-500 font-semibold'>
                                Learning capacity
                            </div>
                            <p className='mt-2 text-slate-500'>
                                I have a strong capacity for learning, especially when it comes to things I am passionate about.
                                My enthusiasm for these areas drives me to continually expand my knowledge and skills.
                                I am always eager to embrace new challenges and grow both personally and professionally.
                            </p>
                        </div>
                        <div className='p-4 sm:p-5 flex justify-center items-center'>
                            <img src={Sk} alt="Skill 1" className='w-32 h-32 object-cover' />
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-2xl shadow-md overflow-hidden hover:animate-pulse'>
                    <div className='flex flex-col sm:flex-row'>
                        <div className='p-4 sm:p-5 flex justify-center items-center'>
                            <img src={Sk4} alt="Skill 2" className='w-32 h-32 object-cover' />
                        </div>
                        <div className='p-4 sm:p-8 flex-1'>
                            <div className='uppercase tracking-wide text-sm text-gray-500 font-semibold'>
                                Languages
                            </div>
                            <p className='mt-2 text-slate-500'>
                                I am fluent in English and Spanish, and I have a working knowledge of Portuguese.
                                My multilingual skills enable me to communicate effectively in diverse environments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='my-6 border-gray-400' />

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className='bg-white rounded-2xl shadow-md overflow-hidden hover:animate-pulse'>
                    <div className='flex flex-col sm:flex-row'>
                        <div className='p-4 sm:p-8 flex-1'>
                            <div className='uppercase tracking-wide text-sm text-gray-500 font-semibold'>
                                Good social skills
                            </div>

                            <p className='mt-2 text-slate-500'>
                                I am a person who easily builds relationships and connects with others.
                                My ability to interact effectively and engage with people from various backgrounds helps me,
                                to colaborate with others.

                            </p>
                        </div>
                        <div className='p-4 sm:p-5 flex justify-center items-center'>
                            <img src={Sk6} alt="Skill 3" className='w-32 h-32 object-cover' />
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-2xl shadow-md overflow-hidden hover:animate-pulse'>
                    <div className='flex flex-col sm:flex-row'>
                        <div className='p-4 sm:p-5 flex justify-center items-center'>
                            <img src={Sk3} alt="Skill 4" className='w-32 h-32 object-cover' />
                        </div>
                        <div className='p-4 sm:p-8 flex-1'>
                            <div className='uppercase tracking-wide text-sm text-gray-500 font-semibold'>
                                Development Tools and Technologies
                            </div>
                            <p className='mt-2 text-slate-500'>
                                I have used tools such as Java, React.js, Tailwind, Vite, TypeScript,
                                and HTML in my development projects. These technologies have equipped me with a solid
                                foundation in modern web and software development practices,
                                allowing me to build efficient and scalable applications.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

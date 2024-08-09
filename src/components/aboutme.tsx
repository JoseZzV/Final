import H4 from "../assets/H4.jpg";
import H5 from "../assets/H5.jpg";
import H6 from "../assets/H6.jpg";

export default function AboutMe() {
    return (
        <div id="aboutme" className='bg-gray-600 m-5 sm:m-20 max-w-full'>
            <div className='grid justify-items-center m-10'>
                <h1 className='text-3xl text-white mt-10'>Hobbies</h1>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-4">
                {[{ img: H4, title: 'Reading books', description: 'Reading books is essential to me as it increase my knowledge and stimulates my mind. It enhances my vocabulary and comprehension skills' },
                  { img: H5, title: 'Play videogames', description: 'I also enjoy playing video games because I find the entire world of gaming incredible and fascinating. The possibilities within video game development are endless, and exploring this field excites me.' },
                  { img: H6, title: 'Play Football', description: 'For me, sports are very important for staying healthy and active. They also play a crucial role in maintaining good mental health' }
                ].map((hobby, index) => (
                    <div key={index} className="relative rounded-xl overflow-hidden group flex items-center justify-center">
                        <img 
                            src={hobby.img} 
                            className="w-full h-full object-cover" 
                            alt={`Hobby ${index + 1}`} 
                        />
                        <div 
                            className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-4"
                        >
                            <div className="text-white font-bold text-2xl sm:text-3xl text-center">
                                {hobby.title}
                            </div>
                            <div className="text-white text-center mt-2 text-sm sm:text-base">
                                {hobby.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

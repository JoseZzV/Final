import React, { useState, useEffect } from 'react';

// Importa las imágenes
import image1 from '../assets/fashion1.jpeg';
import image2 from '../assets/fashion2.jpeg';
import image3 from '../assets/fashion3.jpeg';
import image4 from '../assets/fashion4.jpeg';
import image5 from '../assets/fashion5.jpeg';
import image6 from '../assets/fashion6.jpeg';

// Define el array de datos con las imágenes importadas
const modelsData = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
];

const Models: React.FC = () => {
    const [descriptions, setDescriptions] = useState<string[][]>([]);

    // Lee el archivo de texto al montar el componente
    useEffect(() => {
        fetch('/fashion_descriptions.txt')
            .then(response => response.text())
            .then(text => {
                // Divide el texto en bloques usando el delimitador '---'
                const blocks = text.split(/^\s*---\s*$/gm).map(block => block.trim());
                // Divide cada bloque en líneas
                const parsedDescriptions = blocks.map(block => block.split('\n').map(line => line.trim()).filter(line => line));
                setDescriptions(parsedDescriptions);
            })
            .catch(error => console.error('Error fetching descriptions:', error));
    }, []);

    return (
        <section className="p-4 md:p-6 lg:p-10">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Fashion Events</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {modelsData.map((model) => (
                    <div
                        key={model.id}
                        className="flex flex-col items-center bg-white border border-gray-200 p-4 rounded-lg shadow-md"
                    >
                        <img
                            src={model.image}
                            alt={`Model ${model.id}`}
                            className="w-full h-auto object-cover rounded-lg mb-4"
                        />
                        <div className="text-base md:text-lg lg:text-xl">
                            {descriptions[model.id - 1]?.map((desc, index) => (
                                <p key={index} className="mb-2">{desc}</p>
                            )) || 'Descripción no disponible'}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Models;

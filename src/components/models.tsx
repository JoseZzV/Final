import React, { useState, useEffect } from 'react';

// Importa las imágenes
import image1 from '../assets/afrodita.jpg';
import image2 from '../assets/cleopatra.jpg';
import image3 from '../assets/mariaantonieta.jpg';
import image4 from '../assets/matahari.jpg';
import image5 from '../assets/mesalina.jpg';
import image6 from '../assets/monalisa.jpg';

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
    const [selectedModelId, setSelectedModelId] = useState<number | null>(null);
    const [descriptions, setDescriptions] = useState<any[]>([]);

    // Lee el archivo JSON al montar el componente
    useEffect(() => {
        fetch('/models_descriptions.json')
            .then(response => response.json())
            .then(data => {
                setDescriptions(data);
            })
            .catch(error => console.error('Error fetching descriptions:', error));
    }, []);

    // Maneja el clic en una imagen
    const handleImageClick = (id: number) => {
        setSelectedModelId(id);
    };

    return (
        <section className="p-10">
            <h1 className="text-3xl font-bold mb-6">Models</h1>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {modelsData.map((model) => (
                    <div key={model.id} className="border p-4 rounded-lg">
                        <img
                            src={model.image}
                            alt={`Model ${model.id}`}
                            className="w-full h-auto object-cover mb-4 rounded-lg cursor-pointer"
                            onClick={() => handleImageClick(model.id)} // Maneja el clic en la imagen
                        />
                        {selectedModelId === model.id && (
                            <div className="text-4xl mt-2">
                                {descriptions[model.id - 1] ? (
                                    <>
                                        <p><strong>Name:</strong> {descriptions[model.id - 1].name}</p>
                                        <p><strong>Age:</strong> {descriptions[model.id - 1].age}</p>
                                        <p><strong>Modeling Career:</strong> {descriptions[model.id - 1].modelingCareer}</p>
                                    </>
                                ) : (
                                    'Descripción no disponible'
                                )}
                            </div> // Muestra el texto si el modelo está seleccionado
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Models;

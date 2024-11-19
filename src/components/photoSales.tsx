import React, { useState, useEffect } from 'react';

// Importa las imágenes
import image1 from '../assets/afrodita_gallery (1).jpeg';
import image2 from '../assets/afrodita_gallery (2).jpeg';
import image3 from '../assets/afrodita_gallery (3).jpeg';
import image4 from '../assets/cleopatra_gallery (1).jpeg';
import image5 from '../assets/cleopatra_gallery (2).jpeg';
import image6 from '../assets/cleopatra_gallery (3).jpeg';
import image7 from '../assets/mariaantonieta_gallery (1).jpeg';
import image8 from '../assets/mariaantonieta_gallery (2).jpeg';
import image9 from '../assets/mariaantonieta_gallery (3).jpeg';
import image10 from '../assets/matahari_gallery (1).jpeg';
import image11 from '../assets/matahari_gallery (2).jpeg';
import image12 from '../assets/matahari_gallery (3).jpeg';
import image13 from '../assets/mesalina_gallery (1).jpeg';
import image14 from '../assets/mesalina_gallery (2).jpeg';
import image15 from '../assets/mesalina_gallery (3).jpeg';
import image16 from '../assets/monalisa_gallery (1).jpeg';
import image17 from '../assets/monalisa_gallery (2).jpeg';
import image18 from '../assets/monalisa_gallery (3).jpeg';

// Define el array de datos con las imágenes importadas
const modelsData = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 },
    { id: 7, image: image7 },
    { id: 8, image: image8 },
    { id: 9, image: image9 },
    { id: 10, image: image10 },
    { id: 11, image: image11 },
    { id: 12, image: image12 },
    { id: 13, image: image13 },
    { id: 14, image: image14 },
    { id: 15, image: image15 },
    { id: 16, image: image16 },
    { id: 17, image: image17 },
    { id: 18, image: image18 }
];

const Models: React.FC = () => {
    const [selectedModelId, setSelectedModelId] = useState<number | null>(null);
    const [descriptions, setDescriptions] = useState<any[]>([]);

    // Lee el archivo JSON al montar el componente
    useEffect(() => {
        fetch('/gallery_descriptions.json')
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

    // Maneja el clic en el botón "Purchase"
    const handlePurchaseClick = (id: number) => {
        // Aquí puedes añadir la lógica para manejar la compra, como redirigir a una página de pago o mostrar un modal
        alert(`Purchase button clicked for photo ${id}`);
    };

    return (
        <section className="p-10">
            <h1 className="text-3xl font-bold mb-6">Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                {modelsData.map((model) => (
                    <div key={model.id} className="border p-4 rounded-lg">
                        <img
                            src={model.image}
                            alt={`Model ${model.id}`}
                            className="w-full h-auto object-cover mb-4 rounded-lg cursor-pointer"
                            onClick={() => handleImageClick(model.id)} // Maneja el clic en la imagen
                        />
                        {selectedModelId === model.id && (
                            <div className="flex flex-col mt-2">
                                <div className="text-4xl mb-4">
                                    {descriptions[model.id - 1] ? (
                                        <p><strong>Price:</strong> ${descriptions[model.id - 1].price}</p>
                                    ) : (
                                        'Descripción no disponible'
                                    )}
                                </div>
                                <button
                                    onClick={() => handlePurchaseClick(model.id)}
                                    className="self-start px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                                >
                                    Purchase
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Models;

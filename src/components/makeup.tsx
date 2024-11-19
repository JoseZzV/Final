import React, { useState, useEffect } from 'react';

// Importa las imágenes
import image1 from '../assets/producto_afrodita.jpeg';
import image2 from '../assets/producto_cleopatra.jpeg';
import image3 from '../assets/producto_mariaantonieta.jpeg';
import image4 from '../assets/producto_matahari.jpeg';
import image5 from '../assets/producto_mesalina.jpeg';
import image6 from '../assets/producto_monalisa.jpeg';

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
<<<<<<< HEAD
    const [descriptions, setDescriptions] = useState<any[]>([]);

    // Lee el archivo JSON al montar el componente
    useEffect(() => {
        fetch('/product_descriptions.json')
            .then(response => response.json())
            .then(data => {
                setDescriptions(data);
=======
    const [descriptions, setDescriptions] = useState<string[][]>([]);

    // Lee el archivo de texto al montar el componente
    useEffect(() => {
        fetch('/product_descriptions.txt')
            .then(response => response.text())
            .then(text => {
                // Divide el texto en bloques usando el delimitador '---'
                const blocks = text.split(/^\s*---\s*$/gm).map(block => block.trim());
                // Divide cada bloque en líneas
                const parsedDescriptions = blocks.map(block => block.split('\n').map(line => line.trim()).filter(line => line));
                setDescriptions(parsedDescriptions);
>>>>>>> af5f64c4fc0075014612517612cf619fc3d12ab7
            })
            .catch(error => console.error('Error fetching descriptions:', error));
    }, []);

    // Maneja el clic en una imagen
    const handleImageClick = (id: number) => {
        setSelectedModelId(id);
    };

    return (
        <section className="p-10">
            <h1 className="text-3xl font-bold mb-6">Make-Up</h1>
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
<<<<<<< HEAD
                                {descriptions[model.id - 1] ? (
                                    <>
                                        <p><strong>Product:</strong> {descriptions[model.id - 1].product}</p>
                                        <p><strong>Price:</strong> {descriptions[model.id - 1].price}</p>
                                        <p><strong>Product Description:</strong> {descriptions[model.id - 1].productDescription}</p>
                                    </>
                                ) : (
                                    'Descripción no disponible'
                                )}
=======
                                {descriptions[model.id - 1]?.map((desc, index) => (
                                    <p key={index}>{desc}</p>
                                )) || 'Descripción no disponible'}
>>>>>>> af5f64c4fc0075014612517612cf619fc3d12ab7
                            </div> // Muestra el texto si el modelo está seleccionado
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Models;

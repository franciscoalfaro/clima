import React, { useState, useEffect } from 'react';
import { Forms } from './Forms';
import { Tarjeta } from './Tarjeta';

export const Panel = () => {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const apiUrl = "https://api.openweathermap.org/data/2.5";
    const [clima, setClima] = useState([]);
    const [proximashoras, setProximasHoras] = useState([]);
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState(false);
    const [localizacion, setLocalizacion] = useState('');

 


    useEffect(() => {
        obtenerUbicacion();
    }, []);

    // Función para obtener la ubicación del usuario
    const obtenerUbicacion = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    obtenerClimaPorCoordenadas(latitude, longitude);
                },
                (error) => {
                    console.error(error);
                }
            );
        } else {
            console.error("Geolocalización no es compatible con este navegador.");
        }
    };

    // Función para obtener el clima por coordenadas
    const obtenerClimaPorCoordenadas = async (lat, lon) => {
        setLoading(true);
        try {
            const response = await fetch(`${apiUrl}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=es`);
            if (!response.ok) {
                throw new Error('Error al obtener el clima');
            }
            const data = await response.json();
            setClima(data);

            const responseProximaHoras = await fetch(`${apiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=es`);
            if (!responseProximaHoras.ok) {
                throw new Error('Error al obtener el pronóstico');
            }
            const proximaData = await responseProximaHoras.json();
            setProximasHoras(proximaData);
            setLoading(false);
            setInfo(true);

            // Cambiar imagen de fondo según el clima
            const weather = data.weather[0].main.toLowerCase();

            document.body.style.backgroundImage = `url('https://source.unsplash.com/800x600/?${weather}')`;
            document.body.style.backgroundSize = 'cover';


        } catch (error) {
            console.error(error);
            setLoading(false);
            setInfo(false);
        }
    };

    // Función para obtener el clima por nombre de ciudad
    const getLocalizacion = async (loc) => {
        setLoading(true);
        setLocalizacion(loc);

        try {
            const responseClima = await fetch(`${apiUrl}/weather?appid=${apiKey}&lang=es&q=${loc}`);
            if (!responseClima.ok) {
                throw new Error('Error al obtener el clima');
            }
            const climaData = await responseClima.json();
            setClima(climaData);

            const responseProximaHoras = await fetch(`${apiUrl}/forecast?appid=${apiKey}&lang=es&q=${loc}`);
            if (!responseProximaHoras.ok) {
                throw new Error('Error al obtener el pronóstico');
            }
            const proximaData = await responseProximaHoras.json();
            setProximasHoras(proximaData);
            setLoading(false);
            setInfo(true);

            // Cambiar imagen de fondo según el clima
            const weather = climaData.weather[0].main.toLowerCase();
            document.body.style.backgroundImage = `url('https://source.unsplash.com/800x600/?${weather}')`;
           
        } catch (error) {
            console.error(error);
            setLoading(false);
            setInfo(false);
        }
    };


    return (
        <>
            <Forms nuevaLocalizacion={getLocalizacion} />
            <Tarjeta
                infoData={info}
                loadingData={loading}
                clima={clima}
                proximashoras={proximashoras}
            />
        </>


    );
};

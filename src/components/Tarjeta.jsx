import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import { dias } from '../../data/frases';


export const Tarjeta = ({ infoData, loadingData, clima, proximashoras }) => {

    const [frase, setFrase] = useState({});

    useEffect(() => {
        // Obtenemos el día actual como un nombre de día de la semana
        const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        const diaActualNombre = diasSemana[new Date().getDay()];

        // Filtramos las frases que coinciden con el día actual por su título
        const frasesCoincidentes = dias.filter(dia => dia.titulo === diaActualNombre);

        // Si hay más de una frase coincidente, seleccionamos una al azar
        if (frasesCoincidentes.length > 0) {
            const fraseAleatoria = frasesCoincidentes[Math.floor(Math.random() * frasesCoincidentes.length)];
            setFrase(fraseAleatoria);
        } else if (frasesCoincidentes.length === 1) { // Si hay exactamente una frase coincidente, la seleccionamos directamente
            setFrase(frasesCoincidentes[0]);
        }
    }, []);


    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year;

    var url = "";
    var iconUrl = "";

    var iconUrl3 = "";
    var iconUrl6 = "";
    var iconUrl9 = "";
    var iconUrlWind = "";

    var proximashorasDia3 = "";
    var proximashorasDia6 = "";
    var proximashorasDia9 = "";
    var proximashoras21h = "";



    if (loadingData) {
        return <Spinner></Spinner>
    }

    console.log(proximashoras)

    if (infoData) {
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + clima.weather[0].icon + ".png";

        iconUrl3 = url + proximashoras.list[1].weather[0].icon + ".png";
        iconUrl6 = url + proximashoras.list[2].weather[0].icon + ".png";
        iconUrl9 = url + proximashoras.list[3].weather[0].icon + ".png";
        console.log(iconUrl3)

        proximashorasDia3 = proximashoras.list[1].dt_txt.substring(8, 10) + '/' + proximashoras.list[1].dt_txt.substring(5, 7) + '/' + proximashoras.list[1].dt_txt.substring(0, 4) + ' ' + proximashoras.list[1].dt_txt.substring(11, 13);
        proximashorasDia6 = proximashoras.list[2].dt_txt.substring(8, 10) + '/' + proximashoras.list[2].dt_txt.substring(5, 7) + '/' + proximashoras.list[2].dt_txt.substring(0, 4) + ' ' + proximashoras.list[2].dt_txt.substring(11, 13);
        proximashorasDia9 = proximashoras.list[3].dt_txt.substring(8, 10) + '/' + proximashoras.list[3].dt_txt.substring(5, 7) + '/' + proximashoras.list[3].dt_txt.substring(0, 4) + ' ' + proximashoras.list[3].dt_txt.substring(11, 13);

        proximashoras21h = proximashoras.list[5].dt_txt.substring(8, 10) + '/' + proximashoras.list[5].dt_txt.substring(5, 7) + '/' + proximashoras.list[5].dt_txt.substring(0, 4) + ' ' + proximashoras.list[5].dt_txt.substring(11, 13)
    }

    const handleClick = () => {
        document.documentElement.classList.toggled('dark')
    }

    return (
        <div className="mt-5">

            {
                infoData === true ? (

                    <div id="weatherResults" className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">

                        <div className="bg-black bg-opacity-50 p-4 rounded-3xl shadow-md">
                            <h2 className="text-xl font-semibold mb-2">{clima.name}</h2>
                            <p className="text-gray-300">Fecha: {date}</p>
                            <p className="text-gray-300">Temperatura: {(clima.main.temp - 273.15).toFixed(1)}ºC</p>
                            <p className="text-gray-300">Descripción: {clima.weather[0].description} <img src={iconUrl} className="inline-block ml-2"></img></p>
                        </div>
                        <div className="bg-black bg-opacity-50 p-4 rounded-3xl shadow-md">
                            <h5 className="text-gray-300">Temperatura máxima: {(clima.main.temp_max - 273.15).toFixed(1)}ºC</h5>
                            <h5 className="text-gray-300">Temperatura mínima: {(clima.main.temp_min - 273.15).toFixed(1)}ºC</h5>
                            <h5 className="text-gray-300">Sensación térmica: {(clima.main.feels_like - 273.15).toFixed(1)}ºC</h5>
                            <h5 className="text-gray-300">Humedad: {clima.main.humidity}%</h5>
                            <h5 className="text-gray-300">Velocidad del viento: {clima.wind.speed}m/s</h5> <img src={iconUrlWind} className="inline-block ml-2"></img>
                        </div>


                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-black bg-opacity-50 p-4 rounded-3xl shadow-md flex items-center justify-between">
                                <div className="col">
                                    <p>{proximashorasDia3}h</p>
                                    <p className="text-gray-300">Descripción: {proximashoras.list[1].weather[0].description} <img src={iconUrl3} className="inline-block ml-2"></img></p>
                                    <p className="text-gray-300">Temperatura: {(proximashoras.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-black bg-opacity-50 p-4 rounded-3xl shadow-md flex items-center justify-between">
                                <div className="col">
                                    <p>{proximashorasDia6}h</p>
                                    <p className="text-gray-300">Descripción: {proximashoras.list[2].weather[0].description} <img src={iconUrl6} className="inline-block ml-2"></img></p>
                                    <p className="text-gray-300">Temperatura: {(proximashoras.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-black bg-opacity-50 p-4 rounded-3xl shadow-md flex items-center justify-between">
                                <div className="col">
                                    <p>{proximashorasDia9}h</p>
                                    <p className="text-gray-300">Descripción: {proximashoras.list[3].weather[0].description} <img src={iconUrl9} className="inline-block ml-2"></img></p>
                                    <p className="text-gray-300">Temperatura: {(proximashoras.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-black bg-opacity-50 p-4 rounded-3xl shadow-md flex items-center justify-between">
                                <div className="col">
                                    <p>{proximashoras21h}h</p>
                                    <p className="text-gray-300">Descripción: {proximashoras.list[5].weather[0].description} <img src={iconUrl9} className="inline-block ml-2"></img></p>
                                    <p className="text-gray-300">Temperatura: {(proximashoras.list[5].main.temp - 273.15).toFixed(1)}ºC</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <div className="bg-black bg-opacity-50 p-4 rounded-3xl shadow-md flex items-center justify-between">
                                <div className="col">
                                    <h2>Frase del dia {frase.titulo}</h2>
                                    <p>{frase.frase}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                ) : (
                    <>
                        <div id="weatherResults" className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                            <p>Sin datos o ubicación inexistente</p>
                        </div>
                    </>


                )
            }
        </div>
    )
}

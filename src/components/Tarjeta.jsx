import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import { dias } from '../../data/frases';


export const Tarjeta = ({ infoData, loadingData, clima, proximashoras }) => {

    const [frase, setFrase] = useState({});
    const kelvinToCelsius = (kelvin) => (kelvin - 273.15).toFixed(1);


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

    var clas = "";

    var iconUrl21 = "";

    var proximashorasDia3 = "";
    var proximashorasDia6 = "";
    var proximashorasDia9 = "";
    var proximashoras21h = "";
    var backgroundClass = 'https://source.unsplash.com/800x600/?'
  

    if (loadingData) {
        return <Spinner></Spinner>
    }

    if (infoData) {
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + clima.weather[0].icon + ".png";

        iconUrl3 = url + proximashoras.list[1].weather[0].icon + ".png";
        iconUrl6 = url + proximashoras.list[2].weather[0].icon + ".png";
        iconUrl9 = url + proximashoras.list[3].weather[0].icon + ".png";

        proximashorasDia3 = proximashoras.list[1].dt_txt.substring(8, 10) + '/' + proximashoras.list[1].dt_txt.substring(5, 7) + '/' + proximashoras.list[1].dt_txt.substring(0, 4) + ' ' + proximashoras.list[1].dt_txt.substring(11, 13);
        proximashorasDia6 = proximashoras.list[2].dt_txt.substring(8, 10) + '/' + proximashoras.list[2].dt_txt.substring(5, 7) + '/' + proximashoras.list[2].dt_txt.substring(0, 4) + ' ' + proximashoras.list[2].dt_txt.substring(11, 13);
        proximashorasDia9 = proximashoras.list[3].dt_txt.substring(8, 10) + '/' + proximashoras.list[3].dt_txt.substring(5, 7) + '/' + proximashoras.list[3].dt_txt.substring(0, 4) + ' ' + proximashoras.list[3].dt_txt.substring(11, 13);

        proximashoras21h = proximashoras.list[5].dt_txt.substring(8, 10) + '/' + proximashoras.list[5].dt_txt.substring(5, 7) + '/' + proximashoras.list[5].dt_txt.substring(0, 4) + ' ' + proximashoras.list[5].dt_txt.substring(11, 13)
    }




    return (
        <div className="">

            {
                infoData === true ? (

                    <div id="weatherResults" className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-white">

                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className={`bg-cover bg-center h-40`} style={{ backgroundImage: `url(${backgroundClass+clima.weather[0].main})` }}>
                            </div>
                            <div className="p-4">
                                <div className="text-gray-600 text-lg font-semibold mb-2">{clima.name}, {clima.sys.country} - {date}</div>
                                <div className="text-gray-600 text-2xl">T° {kelvinToCelsius(clima.main.temp )}ºC</div>
                                <div className="text-gray-600">{clima.weather[0].description} <img src={iconUrl} className="inline-block ml-2"></img></div>
                                <div className="text-gray-600">Temperatura máxima: {kelvinToCelsius(clima.main.temp_max )}ºC</div>
                                <div className="text-gray-600">Temperatura mínima: {kelvinToCelsius(clima.main.temp_min )}ºC</div>
                                <div className="text-gray-600">Sensación térmica: {kelvinToCelsius(clima.main.feels_like )}ºC</div>
                                <div className="text-gray-600">Humedad: {clima.main.humidity}%</div>
                                <div className="text-gray-600">Velocidad del viento: {clima.wind.speed}m/s</div>
                            </div>
                        </div>


                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className={`bg-cover bg-center h-40`} style={{ backgroundImage: `url(${backgroundClass+proximashoras.list[1].weather[0].main})` }}>
                            </div>
                            
                            <div className="p-4">
                                <div className="text-gray-600 text-lg font-semibold mb-2"> {clima.name}, {clima.sys.country} - {proximashorasDia3}h</div>
                                <div className="text-gray-600">Descripción: {proximashoras.list[1].weather[0].description} <img src={iconUrl3} className="inline-block ml-2"></img></div>
                                <div className="text-gray-600">Temperatura: {kelvinToCelsius(proximashoras.list[1].main.temp )}ºC</div>
                            </div>
                        </div>


                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className={`bg-cover bg-center h-40`} style={{ backgroundImage: `url(${backgroundClass+proximashoras.list[2].weather[0].main})` }}>
                            </div>
                            <div className="p-4">
                                <div className="text-gray-600 text-lg font-semibold mb-2"> {clima.name}, {clima.sys.country} - {proximashorasDia6}h</div>
                                <div className="text-gray-600">Descripción: {proximashoras.list[2].weather[0].description} <img src={iconUrl6} className="inline-block ml-2"></img></div>
                                <div className="text-gray-600">Temperatura: {kelvinToCelsius(proximashoras.list[2].main.temp )}ºC</div>
                            </div>
                        </div>


                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className={`bg-cover bg-center h-40`} style={{ backgroundImage: `url(${backgroundClass+proximashoras.list[3].weather[0].main})` }}>
                            </div>
                            <div className="p-4">
                                <div className="text-gray-600 text-lg font-semibold mb-2"> {clima.name}, {clima.sys.country} - {proximashorasDia9}h</div>
                                <div className="text-gray-600">Descripción: {proximashoras.list[3].weather[0].description} <img src={iconUrl9} className="inline-block ml-2"></img></div>
                                <div className="text-gray-600">Temperatura: {kelvinToCelsius(proximashoras.list[3].main.temp )}ºC</div>
                            </div>
                        </div>

                        
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className={`bg-cover bg-center h-40`} style={{ backgroundImage: `url(${backgroundClass+proximashoras.list[5].weather[0].main})` }}>
                            </div>
                            <div className="p-4">
                                <div className="text-gray-600 text-lg font-semibold mb-2"> {clima.name}, {clima.sys.country} - {proximashoras21h}h</div>
                                <div className="text-gray-600">Descripción: {proximashoras.list[5].weather[0].description} <img src={iconUrl21} className="inline-block ml-2"></img></div>
                                <div className="text-gray-600">Temperatura: {kelvinToCelsius(proximashoras.list[5].main.temp )}ºC</div>
                            </div>
                        </div>


                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className={`bg-cover bg-center h-40`} style={{ backgroundImage: `url(${backgroundClass+proximashoras.list[5].weather[0].main})` }}>
                            </div>
                            <div className="p-4">
                                <div className="text-gray-600 text-lg font-semibold mb-2"> Frase del dia {frase.titulo}</div>
                                <div className="text-gray-600">{frase.frase}</div>
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

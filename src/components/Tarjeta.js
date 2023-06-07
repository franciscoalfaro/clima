import React from 'react'
import { Spiner } from './Spiner'
import imagen from '../assets/img/ciudad.jpeg'

export const Tarjeta = ({ infoData, loadingData,clima,proximashoras }) => {

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

    var proximashorasDia3 = "";
    var proximashorasDia6 = "";
    var proximashorasDia9 = "";


    if(loadingData){
        return <Spiner></Spiner>
    }

    if(infoData){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + clima.weather[0].icon + ".png";
        
        iconUrl3 = url + proximashoras.list[1].weather[0].icon + ".png";
        iconUrl6 = url + proximashoras.list[2].weather[0].icon + ".png";
        iconUrl9 = url + proximashoras.list[3].weather[0].icon + ".png";

        proximashorasDia3 = proximashoras.list[1].dt_txt.substring(8, 10) + '/' + proximashoras.list[1].dt_txt.substring(5, 7) + '/' + proximashoras.list[1].dt_txt.substring(0, 4) + ' ' +  proximashoras.list[1].dt_txt.substring(11, 13);
        proximashorasDia6 = proximashoras.list[2].dt_txt.substring(8, 10) + '/' + proximashoras.list[2].dt_txt.substring(5, 7) + '/' + proximashoras.list[2].dt_txt.substring(0, 4) + ' ' +  proximashoras.list[2].dt_txt.substring(11, 13);
        proximashorasDia9 = proximashoras.list[3].dt_txt.substring(8, 10) + '/' + proximashoras.list[3].dt_txt.substring(5, 7) + '/' + proximashoras.list[3].dt_txt.substring(0, 4) + ' ' +  proximashoras.list[3].dt_txt.substring(11, 13);

        console.log(proximashorasDia3)
    }



    return (
<div className="mt-5">

{
    infoData === true ? (

        <div className="container">
            <div className="card mb-3 mx-auto bg-dark text-light">
                <div className="row g-0">
                    <div className="col-md-4">
                        <h3 className="card-title">{clima.name}</h3>
                        <p className="card-date">{date}</p>
                        <h1 className="card-temp">{(clima.main.temp - 273.15).toFixed(1)}ºC</h1>
                        <p className="card-desc"><img src={iconUrl} alt="icon"/>{clima.weather[0].description}</p>
                        <img src={imagen} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                       <div className="card-body text-start mt-2">
                            <h5 className="card-text">Temperatura máxima: {(clima.main.temp_max - 273.15).toFixed(1)}ºC</h5>
                            <h5 className="card-text">Temperatura mínima: {(clima.main.temp_min - 273.15).toFixed(1)}ºC</h5>
                            <h5 className="card-text">sensación térmica: {(clima.main.feels_like- 273.15).toFixed(1)}ºC</h5>
                            <h5 className="card-text">Humedad: {clima.main.humidity}%</h5>
                            <h5 className="card-text">Velocidad del viento: {clima.wind.speed}m/s</h5>
                        </div>
                        <hr/>

                        <div className="row mt-4">
                            <div className="col">
                                <p>{proximashorasDia3}h</p>
                                <p className="description"><img src={iconUrl3} alt="icon"/>{proximashoras.list[1].weather[0].description}</p>
                                <p className="temp">{(proximashoras.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                            </div>
                            <div className="col">
                                <p>{proximashorasDia6}h</p>
                                <p className="description"><img src={iconUrl6} alt="icon"/>{proximashoras.list[2].weather[0].description}</p>
                                <p className="temp">{(proximashoras.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                            </div>
                            <div className="col">
                                <p>{proximashorasDia9}h</p>
                                <p className="description"><img src={iconUrl9} alt="icon"/>{proximashoras.list[3].weather[0].description}</p>
                                <p className="temp">{(proximashoras.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                            </div>


                        </div>


                    </div>

                </div>
            </div>

        </div>

    ):(
        <h2 className="text-light">Sin datos</h2>
    )
}



</div>
    )
}

import React, { useState } from 'react'
import { Forms } from './Forms'
import { Tarjeta } from './Tarjeta'

export const PanelClima = () => {

    let urlClima = "https://api.openweathermap.org/data/2.5/weather?appid=352cc787d318f8efaa01e5cc649c8c06&lang=es"
    let ciudadUrl = "&q="

    let urlproximaHoras="https://api.openweathermap.org/data/2.5/forecast?appid=352cc787d318f8efaa01e5cc649c8c06&lang=es"

    const [clima, setClima] = useState([])
    const [proximashoras, setProximasHoras] = useState([])
    const [loading, setLoading] = useState(false)
    const [info, setInfo] = useState(false)
    
    const [Localizacion, setLocalizacion] = useState('')
// eslint-disable-next-line

    const getLocalizacion = async(loc)=>{
        setLoading(true)
        setLocalizacion(loc)

        //llamada a la api urlClima

        urlClima=urlClima + ciudadUrl + loc

        await fetch(urlClima).then((response)=>{
            if(!response.ok) throw{response}
            return response.json()

        }).then((climaData)=>{
            setClima(climaData)
            console.log(climaData)
        }).catch(error =>{
            console.log(error)
            setLoading(false)
            setInfo(false)
        })

        //llamada a la api proxima horas
        urlproximaHoras = urlproximaHoras + ciudadUrl + loc

        await fetch(urlproximaHoras).then((response)=>{
            if(!response.ok) throw{response}
            return response.json()

        }).then((proximaData)=>{
            setProximasHoras(proximaData)
            console.log(proximaData)

            setLoading(false)
            setInfo(true)

        }).catch(error =>{
            console.log(error)
            setLoading(false)
            setInfo(false)
        })

    }

  return (
    <>

        <Forms
        nuevaLocalizacion={getLocalizacion}
        ></Forms>
        <Tarjeta
        infoData={info}
        loadingData={loading}
        clima = {clima}
        proximashoras={proximashoras}
        ></Tarjeta>
    </>
  )
}

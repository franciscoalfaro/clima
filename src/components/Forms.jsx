import React, { useState } from 'react'

export const Forms = ({ nuevaLocalizacion }) => {
    const [city, setCity] = useState()

    const onSubmit = (e) => {
        e.preventDefault();
        if (city === "" || !city)
            return;

        nuevaLocalizacion(city);
    }
    return (
        <form id="searchForm" className="mb-8 flex" onSubmit={onSubmit}>
            <input id="locationInput" type="text" placeholder="Ingrese una ubicación..." className="flex-grow px-4 py-2 rounded-l-md shadow-md focus:outline-none focus:ring focus:ring-blue-300" onChange={(e) => setCity(e.target.value)}></input>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">Buscar</button>
        </form>

    )
}

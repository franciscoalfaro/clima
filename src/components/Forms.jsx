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
        <div className="container mx-auto py-8">
            <div className="max-w-lg mx-auto">
                <div className="mt-4 flex flex-col sm:flex-row justify-center items-center">
                    <form id="searchForm" onSubmit={onSubmit} className="flex-1 flex sm:mr-4">
                        <input type="text" id="locationInput" placeholder="Ingrese una ubicación..." className="flex-1 rounded-l-md px-4 py-2 border-t border-b border-l text-gray-800 border-gray-300 bg-white" onChange={(e) => setCity(e.target.value)} />
                        <button type='submit' className="rounded-r-md px-6 py-2 bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition duration-200">Consultar</button>
                    </form>
                </div>
            </div>
        </div>


    )
}

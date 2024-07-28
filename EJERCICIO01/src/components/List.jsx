"use client"
import React from "react";
import { Item } from "../components/Items.jsx";
import { useState } from "react";
import { Total } from "./Total.jsx";

export const List = () => {

    const [listaPeli, setListaPeli] = useState([]);
    const [ref, setRef] = useState(false);
    const [peliSeleccionada, setPeliSelect] = useState(0);
    const informacion = require("../app/informacion.json");

    const cambiarEL = (evento) => {
        setPeliSelect(evento.target.value);
    }

    const agregarPeli = () => {
        if (peliSeleccionada != -1) {
            setListaPeli([...listaPeli, informacion[peliSeleccionada]]);
            setRef(true);
        }
    }

    const cambiarCantidad = (evento, key) => {

        let arregloAux = [...listaPeli];
        arregloAux[key].cantidad = evento.target.value;
        setListaPeli(arregloAux);
    }

    const eliminar = (key) => {
        let aux = [...listaPeli];
        aux.splice(key, 1);

        setListaPeli(aux);

        // Cuando ya no hay elementos, la bandera vuelve a ser false
        if (aux.length == 0)
            setRef(false);
    }

    return (
        <>
            <div class="items-center px-10 me-2 mb-2">
                <ul class="grid gap-6 md:grid-cols-2 px-10">
                    <div class="block">
                        <div class="flex items-center mb-2">
                            <select onChange={(e) => cambiarEL(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {informacion.map(pelicula => (
                                    <option value={pelicula.id} key={pelicula.id}>{pelicula.nombre}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div class="block">
                        <div class="flex items-center mb-2">
                            <button onClick={agregarPeli} type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-10 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Agregar</button>
                        </div>
                    </div>
                </ul>
            </div>
            <div class="items-center px-10 me-2 mb-2">
                {listaPeli.map((pelicula, llave) => (
                    <Item pelicula={pelicula} cdf={llave} cambiar={cambiarCantidad} Eliminar={eliminar} />
                ))}
            </div>
            <Total peliculas={listaPeli} flag={ref} />
        </>
    );
}
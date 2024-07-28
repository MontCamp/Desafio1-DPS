import { useState } from "react";

export const Item = ({ pelicula, cdf, cambiar, Eliminar }) => {

    const [subTotal, setSubTotal] = useState(pelicula.precio);

    const calcularSubtotal = () => {
        setSubTotal(pelicula.precio * pelicula.cantidad);
    }

    return (
        <div key={cdf} className="elementoP">
            <div class="flex gap-20 sm:grid-cols-3 p-5 py-5 m-3">
                <div class="block">
                    <div>
                        <p>Película: <span>{pelicula.nombre}</span> <span> - ${pelicula.precio.toFixed(2)}</span></p>
                        <p>A pagar: <span>${subTotal.toFixed(2)}</span></p>
                    </div>
                </div>
                <div class="block">
                    <div class="inputGroup">
                        <input type="number" id={`txtM${pelicula.id}`} min="1" defaultValue={1} onChange={(e) => {
                            cambiar(e, cdf);
                            calcularSubtotal();
                        }}></input>
                    </div>
                </div>
                <div class="block">
                    <button type="button" onClick={() => Eliminar(cdf)} className="btn eliminar">
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
                        </svg>
                    </button>
                </div>
            </div>
            <hr />
        </div>
    )
}
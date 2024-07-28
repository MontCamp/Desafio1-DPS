import { useEffect, useState } from "react";

export const Total = ({ peliculas, flag }) => {

    const calcular = () => {
        totalAux = 0;

        if (flag) {
            peliculas.forEach((pelicula) => {
                totalAux += (pelicula.precio * pelicula.cantidad);
                setTotal(totalAux);
            });
        }
        else
            setTotal(0);
    }

    useEffect(() => {
        calcular();
    }, [peliculas]);

    const [total, setTotal] = useState(0);
    let totalAux = 0;

    return (
        <div class="items-left px-10 p-5 m-3">
            <p>Total: <b>${total.toFixed(2)}</b></p>
        </div>
    )
}
import { useState } from 'react';
import Image from 'next/image';

export function CarItem({ Todos, Eliminar }) {
    return (
        <div className='row-product'>
            {Todos.map(product => (
                <div className='cart-product'
                    key={product.id}>
                    <div className='info-cart-product'>
                        <img src={product.urlImage} className='info-car-img' />
                        <p className='titulo-producto-carrito'>
                            {product.nombre}
                        </p>
                        <span className='precio-producto-carrito'>
                            ${product.price}
                        </span>
                    </div>
                    <div class="inputGroup">
                        <input type="number" required="" autocomplete="off" value={product.quantity}/>
                    </div>
                    <img
                        src="https://i.fbcd.co/products/resized/resized-750-500/de18ae7d25cea00a569f391100ae56d990105791a99a2d42f35d84477a869d68.webp"
                        alt="cerrar"
                        className="icon-close"
                        onClick={() => Eliminar(product)}
                    />
                </div>
            ))}
        </div>
    );
}
import React from "react";

export function CarTotal ({total}){
    return (
        <div className='cart-total'>
            <h3>Total:</h3>
            <span className='total-pagar'>${total}</span>
        </div>
    );
}

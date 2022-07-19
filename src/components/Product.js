import React from 'react'
import PropTypes from 'prop-types'
import img from './../assets/product/product-default.png';

export default function Product(props) {

    const desc = (str) => {
        if (str.length > 70) {
            str = str.substring(0, 70) + '...';
        }
        return str;
    }

    return (
        <div className='flex-row flex-1 h-[60vh] m-2 bg-white p-3'>
            <h1 className='text-2xl font-bold'>{props.heading}</h1>
            <br />
            <img src={props.img} className='h-3/5 mx-auto' alt='product' />
            <br />
            <p className='text-base'>{desc(props.description)}</p>
            <p className='text-lg font-semibold'><sup>₹</sup>{props.finalPrice}<sup>00</sup>&nbsp;&nbsp;<span className="text-sm font-normal">M.R.P: ₹<strike>{props.price}.00</strike></span></p>
        </div>
    )
}

Product.defaultProps = {
    heading: 'Product',
    img: img,
    description: 'Product Description',
    finalPrice: '0',
    price: '0'
}

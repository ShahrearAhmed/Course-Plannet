import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Product.css"
const Product = (props) => {
    const { name, image, author, subscribers, videos, date, price, course }
        = props.courseProduct;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
            <div className="card-design">
                <div className="product-name">
                    <img className="img" src={image} alt="" />
                    <h4>Name: {name} </h4>
                    <p>Author: {author}</p>
                    <p>Course Name:{course}</p>
                    <p>Course Enroll: {subscribers}</p>
                    <p>Total Videos: {videos}</p>
                    <p>Course Start Date: {date}</p>
                    <p>Course Price:${price}</p>
                    <button
                        // onClick={() => props.handleAddToCart(props.channleProduct)}
                        className="btn-purchase">{element} Buy Course</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
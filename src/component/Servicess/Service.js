import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
const Service = () => {
    const [coursesProduct, setCoursesProduct] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(response => response.json())
            .then(data => setCoursesProduct(data));
    }, [])
    return (

        <div className="courses-container">
            <div className="title">
                <h1>Courses We Offer</h1>
                <div className="course-container">
                    {
                        coursesProduct.map(courseProduct =>
                            <Product key={courseProduct.key}
                                courseProduct={courseProduct}
                            // handleAddToCart={handleAddToCart
                            // channelNameAddToCart={channelNameAddToCart}
                            ></Product>)
                    }
                </div>
            </div>
        </div>

    );
};

export default Service;
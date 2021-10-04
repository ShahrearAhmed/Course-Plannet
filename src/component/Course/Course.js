import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Course.css"
const Course = () => {
    const [coursesProduct, setCoursesProduct] = useState([]);
    useEffect(() => {
        fetch('./course.JSON')
            .then(response => response.json())
            .then(data => setCoursesProduct(data));
    }, [])
    return (

        <div className="courses-container">
            {/* <h1>Our Courses</h1> */}
            {/* <br /> */}
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
    );
};

export default Course;
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from './Product';

const productData = [
    {
        id: 1,
        image: 'https://picsum.photos/id/239/800/800', // Replace with the actual image URL or import the image
        title: 'lorem',
        description: 'Description for Slide 1.',
    },
    {
        id: 2,
        image: 'https://picsum.photos/id/278/800/800',
        title: 'Slide 2',
        description: 'Description for Slide 2.',
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Slide 2',
        description: 'Description for Slide 2.',
    },
    {
        id: 4,
        image: 'https://picsum.photos/id/27/800/800',
        title: 'Slide 2',
        description: 'Description for Slide 2.',
    },
    {
        id: 5,
        image: 'https://picsum.photos/id/967/800/800',
        title: 'Slide 2',
        description: 'Description for Slide 2.',
    },
    {
        id: 6,
        image: 'https://picsum.photos/id/297/800/800',
        title: 'Slide 2',
        description: 'Description for Slide 2.',
    },
    {
        id: 7,
        image: 'https://picsum.photos/id/409/800/800',
        title: 'Slide 2',
        description: 'Description for Slide 2.',
    },
    {
        id: 8,
        image: 'https://picsum.photos/id/10/800/800',
        title: 'Slide 2',
        description: 'Description for Slide 2.',
    },


];


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1200 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 1500, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 764 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 2
    }
};


const product = productData.map((item, index) => <Product title={item.title} key={index.id} description={item.description} image={item.image} />)

const simpleSlider = () => {

    return (
        <>
            <div className="container">
                <div style={{ marginTop: "20px" }} >
                    <Carousel responsive={responsive}>
                        {product}
                    </Carousel>
                </div>
            </div>
        </>
    );
};

export default simpleSlider;

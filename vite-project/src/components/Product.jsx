import React from 'react'

const Product = (item) => {
    return (
        <>
            <div style={{ height: "300px" }} className="card mx-2 rounded-o shadow">
                <div   >
                    <img style={{ height: "230px", }} src={item.image} className="card-img-top" alt="..." />
                </div>
                <div className="card-body text-center">
                    <h5 className="card-text">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                </div>
            </div>
        </>
    )
}

export default Product

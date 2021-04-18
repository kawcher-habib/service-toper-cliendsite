import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ serviceData }) => {
    return (
        <div className="">
            <div className="card ml-5 mt-3 p-3 shadow" style={{ width: "18rem" }}>
                <div className=" w-50 d-flex justify-content-center">
                    <img className="card-img-top ml-5" src={serviceData.img} alt="Card image cap" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{serviceData.title}</h5>
                    <p className="card-text">{serviceData.description}</p>
                    <Link to='/serviceDetail'><a className="btn btn-primary">Booking Now</a></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
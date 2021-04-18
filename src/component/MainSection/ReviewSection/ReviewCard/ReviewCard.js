import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReviewCard = ({ reviewData }) => {
    return (

        <div className="col-md-3 col-ms-12 ml-5 p-2 shadow">

            <img src={reviewData.img} alt="img" />
            <h4 className="mt-2 mb-2">{reviewData.name}</h4>
            <p>{reviewData.description}</p>
            <div  className="d-flex justify-content-center mb-3">
                <FontAwesomeIcon className="text-warning ml-2" icon={reviewData.start} />
                <FontAwesomeIcon className="text-warning ml-2"  icon={reviewData.start} />
                <FontAwesomeIcon className="text-warning ml-2" icon={reviewData.start} />
                <FontAwesomeIcon className="text-warning ml-2" icon={reviewData.start} />
                <FontAwesomeIcon className="text-warning ml-2" icon={reviewData.startHalf} />
            </div>


        </div>

    );
};

export default ReviewCard;
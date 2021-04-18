import React from 'react';
import img1 from '../../../image/review/Ellipse 1.png';
import img2 from '../../../image/review/Ellipse 2.png';
import img3 from '../../../image/review/Ellipse 3.png'
import ReviewCard from './ReviewCard/ReviewCard';
import { faStar,faStarHalf } from '@fortawesome/free-solid-svg-icons'

const ReviewSection = () => {
    const reviewData = [
        {
            id : "01",
            img : img1,
            name : 'Ellipse Smith',
            description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, totam.',
            start : faStar,
            startHalf : faStarHalf,
        },
        {
            id : "02",
            img : img2,
            name : 'Alex Diplot',
            description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, totam.',
            start : faStar,
            startHalf : faStarHalf,
        },
        {
            id : "03",
            img : img3,
            name : 'Alart Herish',
            description : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, totam.',
            start : faStar,
            startHalf : faStarHalf,
        }
    ]
    return (
        <div className="container mt-5 mb-5">
                <h2 className="text-center">Clain Review</h2>
            <div className="row mt-5">
                {
                    reviewData.map( data => <ReviewCard reviewData={data}/>)
                }
            </div>
        </div>
    );
};

export default ReviewSection;
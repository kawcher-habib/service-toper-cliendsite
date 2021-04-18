import React from 'react';
import cleaner from '../../../image/cleaning-service.png';
import monitor from '../../../image/monitor.png';
import smartphone from '../../../image/smartphone.png';
import lockers from '../../../image/lockers.png';
import carRepair from '../../../image/car-repair.png';
import adoption from '../../../image/adoption.png';
import ServiceCard from './ServiceCard/ServiceCard';
import AddService from '../../Admin/AddService/AddService';



const Services = () => {
    const serviceData = [
        {
            id : "01",
            img : cleaner,
            title : "Cleaner Service",
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, similique!',

        },
        {
            id :"02",
            img : monitor,
            title : "Monitor Service",
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, similique!',

        },
        {
            id : "03",
            img : smartphone,
            title : "Smartphone Service",
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, similique!',

        },
        {
            id : "04",
            img : lockers,
            title : "Lockers Service",
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, similique!',

        },
        {
            id :"05",
            img : carRepair,
            title : "CarRepair Service",
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, similique!',

        },
        {
            id : "06",
            img : adoption,
            title : "Adoption Service",
            description : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, similique!',

        },
    ]
    return (
        <div className="container mt-5">
            <h2>Our Services</h2>
            <div className="row mt-5">
                {
                     serviceData.map( data => <ServiceCard serviceData = {data} />)
                    
                   
                }
               
            </div>
           
        </div>
    );
};

export default Services;
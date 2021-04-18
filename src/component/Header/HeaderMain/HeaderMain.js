import React from 'react';
import './HeaderMain.css'
import img from'../../../image/homeBg.jpg'

const HeaderMain = () => {
    return (
        <div className=" mb-1">
            <img src={img} alt="img" className="img-fluid"/>
        </div>
    );
};

export default HeaderMain;
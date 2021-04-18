import React from 'react';

const Footer = () => {
    return (
        <div className="bg-info p-5">
            <div className="container ">
                <div className="row ">
                    <div className="col-md-5 col-ms-12 ml-3 ">
                        <h6>Contact Us</h6>
                        <ul className="">
                            <li className="">Email : contact@email.com</li>
                            <li>Phone :  +088 15647329</li>
                            <li>Address : Dhanmondi, Dhaka-1200, Bangladesh</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-ms-12 ml-3">
                        <h6>Service For You</h6>
                    <ul>
                            <li>Cleaner Service</li>
                            <li>Monitor Service</li>
                            <li>Smartphone Service</li>
                            <li>Lockers Service</li>
                    </ul>
                    </div>
                    <div className="col-md-3 col-ms-12 ml-3">
                        <h6>Our Location Map</h6>
                        <h6>Coming Soon.......</h6>
                    </div>
                    </div>
            </div>
            <h6 className="text-center mt-3">Copy@right by kawcher</h6>
        </div>
    );
};

export default Footer;
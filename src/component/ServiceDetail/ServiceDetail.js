import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Navbar from '../Header/Navbar/Navbar';
import Sitebar from './Sitebar/Sitebar';

const ServiceDetail = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#home">Service-Toper</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-danger text-white ml-3" to="/login">{loggedInUser.email}</Link>
                            </li>

                        </ul>

                    </div>
                </nav>
                <Sitebar />
            </div>
    );
};

export default ServiceDetail;
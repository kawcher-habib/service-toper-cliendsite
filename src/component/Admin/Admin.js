import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import AddService from './AddService/AddService';

const Admin = () => {
    const [loggedInUser, setLoggedInUsers] = useContext(UserContext)
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
                                <Link className="nav-link btn btn-danger text-white ml-3" to="/login">{loggedInUser.email}</Link>
                            </li>

                        </ul>

                    </div>
                </nav>
           <div className="row mt-5">
                <div className="col-4">
                    <div className="list-group border-none" id="list-tab" role="tablist">
                        <a className="list-group-item list-group-item-action active" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">AddService</a>
                        <a className="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Service Managing</a>
                        <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Service Delate</a>
                    </div>
                </div>
                <div className="col-8">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                           <AddService />
                        </div>
                        <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                            Coming Soon ......
                        </div>
                        <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                            Coming Soon ......
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
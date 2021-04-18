import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../FirebaseConfig/FirebaseConfig'
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}



const CreateAccount = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const [users, setUsers] = useState({
        email: '',
        password: '',
        error : ''
    })

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" }};

    const blurHandler = (e) => {
        let newUser = { ...users }
        newUser[e.target.name] = e.target.value;
        console.log(newUser)
        setUsers(newUser)
    }

    const formSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(users)
        firebase.auth().createUserWithEmailAndPassword(users.email, users.password)
            .then((userCredential) => {
                const newUser = {...users}
                setLoggedInUser(newUser)
                history.replace(from)
                
            })
            .catch((error) => {
                // var errorCode = error.code;
                // var errorMessage = error.message;
                // ..
                const newUser = {...users}
                newUser.error =error.message
                setUsers(newUser)
            });
    }

    return (
        <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-5 mt-3  p-3 shadow">
                <h2 className="text-center">Sign Up Form</h2>
                <form onSubmit={formSubmitHandler}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" name="email" onBlur={blurHandler} className="form-control" id="exampleInputEmail1" placeholder="Enter Name" />
                       
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" onBlur={blurHandler} className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="password" onBlur={blurHandler} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <small id="emailHelp" className="form-text text-danger mt-1 mb-2 " style={{color:'red'}}>{users.error}</small>

                    <input type="Submit" className="btn btn-primary" value="Sign Up" />
                </form>
            </div>
            <div className="col-md-3">

            </div>
        </div>
    );

};

export default CreateAccount;
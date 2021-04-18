import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../FirebaseConfig/FirebaseConfig'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const Login = () => {

    const [users , setUsers] = useState({
        email : '',
        password : '',
        error : ''
    });
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let{ from } = location.state || { from: { pathname: "/" }};
    console.log(history)

    const blurHandler = (e) => {
        const newUser = { ...users }
        newUser[e.target.name] = e.target.value;
        console.log(newUser)
        setUsers(newUser)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(users)
        firebase.auth().signInWithEmailAndPassword(users.email, users.password)
            .then((userCredential) => {
                const newUser = {...users}
                    setLoggedInUser(newUser)
                    history.replace(from)
            })
            .catch((error) => {
                const newUser = {...users}
                newUser.error = error.message
                setUsers(newUser)
                
            });
    }


    return (
        <div className="row">
            <div className="col-md-3">

            </div>
            <div className="col-md-5 mt-3 p-3 shadow">
                <h2 className="text-center">Login Form</h2>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" onBlur={blurHandler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                       
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="password" onBlur={blurHandler} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <small id="emailHelp" className="form-text text-danger mb-2">{users.error}</small>
                    <button type="submit" className="btn btn-primary">Sign In</button>
                </form>
                <h6 className="mt-2"> <Link to="/createAccount">Create A New Account</Link></h6>
            </div>
            <div className="col-md-3">

            </div>
        </div>
    );
};

export default Login;
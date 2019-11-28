import React, {useState} from 'react'
import {connect} from 'react-redux'
import { signUp } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom'

function SignUp(props) {
    const [values , setValues] = useState({
        email:'', password:'', confirmPassword:'', firstName:'', lastName:''
    });

    const handleChange = event => {
        const {id , value} = event.target;
        setValues({
            ...values,
            [id]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.signUp(values);
    }
    const { auth, authError } = props;
    if(auth.uid) return <Redirect to='/' />
    
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="white">
                 <h5 className="grey-text text-darken-3">Sign Up</h5>
                 <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleChange}></input>
                 </div>
                 <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={handleChange}></input>
                 </div>
                 <div className="input-field">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" id="confirmPassword" onChange={handleChange}></input>
                 </div>
                 <div className="input-field">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={handleChange}></input>
                 </div>
                 <div className="input-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={handleChange}></input>
                 </div>
                 <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Register</button>
                    <div className="red-text center">
                        { authError ? <p>{ authError }</p> : null }
                    </div>
                 </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToPops = (dispatch) => {
    return {
        signUp : (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToPops)(SignUp)
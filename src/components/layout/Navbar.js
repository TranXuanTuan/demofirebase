import React from 'react'
import {Link} from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import {connect} from 'react-redux'

const Navbar = (props) => {
    const { auth, profile } = props;
    // console.log(auth);
    const links = auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks />
    
    return (
        <nav className="nav.nav-wraper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Blog</Link>
                { links }
            </div>
        </nav>
    )
}

const mapStatetoProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStatetoProps)(Navbar);
import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLink from './SignedInLink';
import SignedOutLink from './SignedOutLink';
import { connect } from 'react-redux'

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className='brand-name'>MarioPlan</Link>
                {
                    props.auth.uid? <SignedInLink profile={props.profile}/> : <SignedOutLink />
                }
            </div>
        </nav>
    )
}
const mapStateToProps = (state) => {
    
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);
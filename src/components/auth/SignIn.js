import React, { Component } from 'react'
import { signIn } from '../../store/actions/authActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

export class SignIn extends Component {

    state ={
        email:'',
        password:''
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);

    }

  render() {
    if(this.props.auth.uid) {
        return <Redirect to='/' />
    }
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={this.state.email} onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={this.state.password} onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <button className="pink btn lighten-1 z-depth-0">Sign In</button>
                <div className="red-text center">
                    {
                        this.props.authError? <p>{this.props.authError}</p>: null
                    }
                </div>
            </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => { dispatch(signIn(credentials)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

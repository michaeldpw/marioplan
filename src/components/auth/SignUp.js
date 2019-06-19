import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/authActions'

export class SignUp extends Component {

    state ={
        email:'',
        password:'',
        firstname:'',
        lastname:''
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.signUp(this.state)
    }

  render() {
    if(this.props.auth.uid) {
        return <Redirect to='/' />
    }
    
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={this.state.email} onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={this.state.password} onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="firstname">First Name</label>
                <input type="text" id="firstname" value={this.state.firstname} onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="lastname">Last Name</label>
                <input type="text" id="lastname" value={this.state.lastname} onChange={this.handleChange}/>
            </div> 
            <div className="input-field">
                <button className="pink btn lighten-1 z-depth-0">Sign Up</button>
                <div className="red-text center">
                    {  this.props.authError ? <p>{this.props.authError}</p>: null}
                </div>
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => {
            dispatch(signUp(newUser))
        }
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)

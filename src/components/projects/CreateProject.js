import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

export class CreateProject extends Component {

    state ={
        title:'',
        content:''
        
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
       this.props.createProject(this.state);
       this.props.history.push('/');
    }

  render() {

    if(!this.props.auth.uid) {
        return <Redirect to='/signin'/>
    }
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Create New Project</h5>
            <div className="input-field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" value={this.state.title} onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label htmlFor="content">Content</label>
                <textarea 
                    type="text" 
                    className="materialize-textarea"
                    id="content" 
                    value={this.state.password} 
                    onChange={this.handleChange}/>
            </div>
           
            <div className="input-field">
                <button className="pink btn lighten-1 z-depth-0" onClick={this.handleSubmit}>Create</button>
            </div>
        </form>
      </div>
    )
  }
}

const mapStateToprops = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToprops = (dispatch) => {
    return {
        createProject: (project) => {dispatch(createProject(project))}
    }
}

export default connect(mapStateToprops, mapDispatchToprops)(CreateProject)
 
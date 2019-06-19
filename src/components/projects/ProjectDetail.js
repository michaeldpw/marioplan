import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectDetail = (props) => {

  if(!props.auth.uid) {
    return <Redirect to='/signin'/>
  }
  if (props.project) {
		return (
			<div className='container section project-details'>
					<div className="card z-depth-0">
							<div className="card-content">
									<span className="card-title">{props.project.title}</span>
									<p>{props.project.content}</p>
							</div>
							<div className="card-action grey grey-text lighten-4">
									<div>Posted by {props.project.authorFirstName} {props.project.authorLastName}</div>
									<div>{ moment(props.project.createdAt.toDate().toString()).calendar()}</div>
							</div>
					</div>         
			</div>
		)
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>  
    )
  }
  
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  }
}
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' }
  ]) 
)(ProjectDetail)

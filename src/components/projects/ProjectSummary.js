import React from 'react'
import { withRouter, NavLink } from 'react-router-dom'
import moment from 'moment'

const ProjectSummary = (props) => {
    return (
        <div className="card z-depth-0 project-summary">
            <NavLink to={'/project/'+props.project.id}>
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{props.project.title}</span>
                    <p>Posted by {props.project.authorFirstName} {props.project.authorLastName}</p>
                    <p className="grey-text">{ moment(props.project.createdAt.toDate().toString()).calendar()}</p>
                </div>
            </NavLink>
        </div>
    )
}

export default withRouter(ProjectSummary);
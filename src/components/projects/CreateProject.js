import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
// import { Redirect } from 'react-router-dom'

function CreateProject(props) {

  const [values, setValues] = useState({
    title: '', content: ''
  });

  const handleChange = event => {
    const { id, value } = event.target;
    setValues({
      ...values,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    props.createProject(values);
    props.history.push('/')
  }

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Create a New Project</h5>
        <div className="input-field">
          <input type="text" id='title' onChange={handleChange} />
          <label htmlFor="title">Project Title</label>
        </div>
        <div className="input-field">
          <textarea id="content" className="materialize-textarea" onChange={handleChange}></textarea>
          <label htmlFor="content">Project Content</label>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1">Create</button>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject)
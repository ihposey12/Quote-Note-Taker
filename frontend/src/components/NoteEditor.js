import React, { Component } from 'react';

class NoteEditor extends Component {

  state = {
    title: 'Welcome home title',
    body: 'Welcome home body'
  }

  componentDidMount = () => {
    this.setState({
      title: this.props.note.title,
      body: this.props.note.body
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleTheSave = (e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/api/v1/notes/${this.props.note.id}`, {
      method: 'PATCH',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(freshNote => {
      this.props.saveTheNote(freshNote)
      //i need a function in app passed down to here
      //this function will change state and replace the old note with the new one
    })
  }

  render() {
    return (

      <form 
        className="note-editor" 
        onSubmit={(e) => this.handleTheSave(e)}
      >

        <input 
          type="text" 
          name="title" 
          value={this.state.title} 
          onChange={(e) => this.handleChange(e)} 
        />

        <textarea 
          name="body" 
          value={this.state.body} 
          onChange={(e) => this.handleChange(e)} 
        />

        <div 
          className="button-row"
        >

          <input 
            className="button" 
            type="submit" 
            value="Save" 
          />

          <button 
            type="button"
            value="Cancel"
            onClick={this.props.handleCancel}>Cancel
          </button>

        </div>
      </form>
    );
  }
}

export default NoteEditor;

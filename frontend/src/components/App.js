import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

const noteURL = 'http://localhost:3000/api/v1/notes'

class App extends Component {

//SET STATE 
  state = {
    notes: [],
    selectedNote: {},
    editNote: false
  }
//

//MOUNT ALL NOTES
  componentDidMount = () => {
    fetch(noteURL)
    .then(res => res.json())
    .then(notes => this.setState({notes: notes}))
  }
//

//SAVE BTN PATCH
  handleSaveClick = (selectedNote, e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/api/v1/notes/${selectedNote.id}`, {
      method: "PATCH",
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(selectedNote)
    })
      .then(res => res.json())
      .then(note => {
        console.log('it works')
      })
  }
//

//CLICK/DISPLAY NOTE
  handleNoteClick = (note) => this.setState({selectedNote: note})
//

//EDIT A NOTE
  handleNoteEdit = () => {
    this.setState({editNote: true})
  }

  editMeChange = (e) => {
    e.persist()
    this.setState(prevState => ({
      selectedNote: {
        ...prevState.selectedNote,
        [e.target.name]: e.target.value
      }
    }))
  }
//

  render() {
    return (
      <div className="app">
        <Header />

        <NoteContainer 
        notes={this.state.notes} 
        handleClick={this.handleNoteClick}
        selectedNote={this.state.selectedNote}
        noteEdit={this.handleNoteEdit}
        editIt={this.state.editNote}
        editMeChange={this.editMeChange}
        handleSaveClick={this.handleSaveClick}
        />
      </div>
    );
  }
}

export default App;

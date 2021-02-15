import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

const noteURL = 'http://localhost:3000/api/v1/notes'

class App extends Component {

//SET STATE 
  state = {
    notes: [],
    selectedNote: {},
    editNote: false,
    filterNote: []
  }
//

//MOUNT ALL NOTES
  componentDidMount = () => {
    fetch(noteURL)
    .then(res => res.json())
    .then(notes => this.setState({notes: notes, filterNote: notes}))
  }
//

//SAVE BTN PATCH
  handleSaveClick = (selectedNote, e) => {
    e.preventDefault()
    fetch(`http://localhost:3000/api/v1/notes/${selectedNote.note.id}`, {
      method: "PATCH",
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(selectedNote.note)
    })
      .then(res => res.json())
      .then(freshNote => {
        this.setState(prevState => {
          return {filterNote: prevState.filterNote.map(oldNote => oldNote.id === freshNote.id ? freshNote : oldNote)}
        })
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

//CANCEL BTN
  handleCancel = () => {
    this.setState({
      editNote: false
    })
  }
//

//POST A NOTE
  postNote = (e) => {
    e.preventDefault()
    fetch(noteURL, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify({
        title: 'default',
        body: 'default',
        id: 1
      })
    })
    .then(res => {this.componentDidMount()})
  }
//

//NOTE SEARCH/FILTER
  handleNoteSearch = (e) => {
    let noteArr = []
    for(let i = 0; i < this.state.notes.length; i++){
      let note = this.state.notes[i].title
      let searchANote = this.state.notes[i]
      if(note.includes(e.target.value)) {
        noteArr.push(searchANote)
      }
    }
    this.setState({
      filterNote: noteArr
    })
  }
//

  render() {
    return (
      <div className="app">
        <Header />

        <NoteContainer 
          notes={this.state.filterNote} 
          handleNoteClick={this.handleNoteClick}
          selectedNote={this.state.selectedNote}
          handleNoteEdit={this.handleNoteEdit}
          editNote={this.state.editNote}
          editMeChange={this.editMeChange}
          handleSaveClick={this.handleSaveClick}
          handleCancel={this.handleCancel}
          postNote={this.postNote}
          handleNoteSearch={this.handleNoteSearch}
        />
      </div>
    );
  }
}

export default App;

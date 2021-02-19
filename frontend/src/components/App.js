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
    // filterNote: []
    searchBar: ''
  }
//

  saveTheNote = (freshNote) => {
    let i = this.state.notes.findIndex((theNote) => theNote.id === freshNote.id)
    this.setState(prevState => {
      // return {notes: [...prevState.notes].map(note => note.id === freshNote.id ? freshNote : note)}
      let oldNotes = [...prevState.notes]
      oldNotes[i] = freshNote
      return {notes: oldNotes, selectedNote: freshNote}
    })
  }

//MOUNT ALL NOTES
  componentDidMount = () => {
    fetch(noteURL)
    .then(res => res.json())
    .then(notes => this.setState({notes: notes}))
  }
//

//SAVE BTN PATCH
  // handleSaveClick = (selectedNote, e) => {
  //   e.preventDefault()
  //   fetch(`http://localhost:3000/api/v1/notes/${selectedNote.note.id}`, {
  //     method: "PATCH",
  //     headers: {'Content-Type' : 'application/json'},
  //     body: JSON.stringify(selectedNote.note)
  //   })
  //     .then(res => res.json())
  //     .then(freshNote => {
  //       this.setState(prevState => {
  //         return {notes: prevState.notes.map(oldNote => oldNote.id === freshNote.id ? freshNote : oldNote)}
  //       })
  //     })
  // }
//

//DELETE
  handleDelete = (props) => {
    fetch(`http://localhost:3000/api/v1/notes/${props.note.id}`, {
      method: 'DELETE'
    })
    .then(() => this.setState(prevState => {
      let leftOverNotes = prevState.notes.filter(note => note.id !== props.note.id)
      return {notes: leftOverNotes, selectedNote: {}}
    }))
  }
//

//CLICK/DISPLAY NOTE
  handleNoteClick = (note) => this.setState({selectedNote: note})
//

//EDIT A NOTE
  handleNoteEdit = () => {
    this.setState({editNote: true})
  }

  // editMeChange = (e) => {
  //   debugger
  //   e.persist()
  //   this.setState(prevState => ({
  //     selectedNote: {
  //       ...prevState.selectedNote,
  //       [e.target.name]: e.target.value
  //     }
  //   }))
  // }
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
    .then(res => res.json())
    .then(note => {
      this.setState(prevState => {
        return {notes: [...prevState.notes, note]}
      })
    })
  }
//

//NOTE SEARCH/FILTER
  // handleNoteSearch = (e) => {
  //   let noteArr = []
  //   for(let i = 0; i < this.state.notes.length; i++){
  //     let note = this.state.notes[i].title
  //     let searchANote = this.state.notes[i]
  //     if(note.includes(e.target.value)) {
  //       noteArr.push(searchANote)
  //     }
  //   }
  //   this.setState({
  //     notes: noteArr
  //   })
  // }

  searchState = (e) => {
    this.setState({
      searchBar: e.target.value
    })
  }

  handleNoteSearch = () => {
    if(this.state.searchBar.length > 0) {
      return [...this.state.notes].filter(note => note.title.toLowerCase().includes(this.state.searchBar.toLowerCase()))
    }
    return (this.state.notes)
  }
//

  filterThrough =()=>{
    if (this.state.searchBar.length > 0) {
       return this.handleNoteSearch()
    } else {
       return this.state.notes
    }
  }

  render() {
    return (
        <div className="app">
          <Header />

          <NoteContainer 
            notes={this.filterThrough()}
            searchState={this.searchState}
            handleNoteClick={this.handleNoteClick}
            selectedNote={this.state.selectedNote}
            handleNoteEdit={this.handleNoteEdit}
            editNote={this.state.editNote}
            // editMeChange={this.editMeChange}
            // handleSaveClick={this.handleSaveClick}
            handleCancel={this.handleCancel}
            postNote={this.postNote}
            handleDelete={this.handleDelete}
            saveTheNote={this.saveTheNote}
          />
        </div>
    );
  }
}

export default App;

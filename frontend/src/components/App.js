import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

const noteURL = 'http://localhost:3000/api/v1/notes'

class App extends Component {

  state = {
    notes: [],
    selectedNote: {}
  }

  componentDidMount = () => {
    fetch(noteURL)
    .then(res => res.json())
    .then(notes => this.setState({notes: notes}))
  }

  handleNoteClick = (notes) => {
    this.setState({selectedNote: notes.note})
  }


  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer 
        notes={this.state.notes} 
        handleClick={this.handleNoteClick}
        selectedNoteContent={this.state.selectedNote}
        />
      </div>
    );
  }
}

export default App;

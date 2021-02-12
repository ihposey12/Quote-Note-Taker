import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList 
        notes={this.props.notes} 
        handleClick={this.props.handleClick}
        handleCancel={this.props.handleCancel}
        createNewNote={this.props.createNewNote}
        // selectedNote={this.props.selectedNote}
        />
        
        <button>New</button>
      </div>
    );
  }
}

export default Sidebar;

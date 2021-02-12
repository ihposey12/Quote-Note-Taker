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
          // postNote={this.props.postNote}
        />
        
        <button onClick={(e) => this.props.postNote(e)}>New</button>
      </div>
    );
  }
}

export default Sidebar;

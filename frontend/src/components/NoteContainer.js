import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  render() {
    return (
      <Fragment>
        <Search 
          handleNoteSearch={this.props.handleNoteSearch}
        />
          <div className='container'>

          <Sidebar 
            notes={this.props.notes} 
            handleClick={this.props.handleClick}
            handleCancel={this.props.handleCancel}
            postNote={this.props.postNote}
          />

          <Content 
            selectedNote={this.props.selectedNote}
            noteEdit={this.props.noteEdit}
            editIt={this.props.editIt}
            editMeChange={this.props.editMeChange}
            handleSaveClick={this.props.handleSaveClick}
            handleCancel={this.props.handleCancel}
          />
          
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;

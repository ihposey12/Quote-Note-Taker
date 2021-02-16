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
            handleNoteClick={this.props.handleNoteClick}
            handleCancel={this.props.handleCancel}
            postNote={this.props.postNote}
          />

          <Content 
            selectedNote={this.props.selectedNote}
            handleNoteEdit={this.props.handleNoteEdit}
            editNote={this.props.editNote}
            editMeChange={this.props.editMeChange}
            handleSaveClick={this.props.handleSaveClick}
            handleCancel={this.props.handleCancel}
            handleDelete={this.props.handleDelete}
          />
          
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;

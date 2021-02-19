import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  render() {
    return (
      <Fragment>
        <Search 
          searchState={this.props.searchState}
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
              // editMeChange={this.props.editMeChange}
              // handleSaveClick={this.props.handleSaveClick}
              handleCancel={this.props.handleCancel}
              handleDelete={this.props.handleDelete}
              saveTheNote={this.props.saveTheNote}
            />
          
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;

import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar 
            notes={this.props.notes} 
            handleClick={this.props.handleClick}
          />

          <Content 
            selectedNote={this.props.selectedNote}
            noteEdit={this.props.noteEdit}
            editIt={this.props.editIt}
            editMeChange={this.props.editMeChange}
            handleSaveClick={this.props.handleSaveClick}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;

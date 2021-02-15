import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  renderContent = () => {
    if (this.props.editNote === true) {
      return <NoteEditor 
        note={this.props.selectedNote}
        editMeChange={this.props.editMeChange}
        handleSaveClick={this.props.handleSaveClick}
        handleCancel={this.props.handleCancel}
      />; 
    } else if (this.props.selectedNote.body) {
      return <NoteViewer 
        note={this.props.selectedNote}
        handleNoteEdit={this.props.handleNoteEdit}
        handleNoteClick={this.props.handleNoteClick}
      />;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;

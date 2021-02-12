import React, { Component } from 'react';

class NoteEditor extends Component {
  render() {
    return (
      <form className="note-editor">
        <input type="text" name="title" value={this.props.note.title} onChange={this.props.editMeChange} />
        <textarea name="body" value={this.props.note.body} onChange={this.props.editMeChange} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" onSubmit={(e) => this.props.handleSaveClick(this.state.props, e)} />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;

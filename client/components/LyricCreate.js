import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import createLyric from '../queries/createLyric';
import fetchSong from '../queries/fetchSong';

class LyricForm extends Component {
  constructor(props) {
    super(props);
    this.state = {content: ""}
  }
  onSubmit = (evt) => {
    evt.preventDefault();
    const { content } = this.state;
    const { songId } = this.props;
    this.props.mutate({
      variables: { songId, content },
      refetchQueries: [{query:fetchSong, variables: {id: songId}}]
    });
    this.setState({content: ''});
  };

  handleChange = (evt) => {
    this.setState({content: evt.target.value})
  };

  render(){
    const {content} = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>Add a Lyric</label>
        <input value={content} onChange={this.handleChange}/>
      </form>
    )
  }
}

export default graphql(createLyric)(LyricForm)
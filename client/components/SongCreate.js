import React, {Component} from 'react';
import {Link, hashHistory} from 'react-router';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

import query from '../queries/fetchSongs';

class CreateSong extends Component {
  constructor(props) {
    super(props);
      this.state = {title: ""}
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.mutate({
      variables: {title: this.state.title},
      refetchQueries: [{ query }]
    }).then(() => hashHistory.push('/'));
  };
  render() {
    const {title} = this.state;
    return(
      <div>
        <Link to="/">Back</Link>
        <h5>Create a New Song</h5>
        <form onSubmit={this.handleSubmit}>
          <label>Song Title:</label>
          <input value={title} onChange={evt => this.setState({title: evt.target.value})}/>
        </form>
      </div>
    )
  }
}

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(CreateSong);
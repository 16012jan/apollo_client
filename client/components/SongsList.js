import React, {Component} from 'react';
import {Link} from 'react-router';
import query from '../queries/fetchSongs';
import mutation from '../queries/deleteSong';
import {graphql} from 'react-apollo';

class SongsList extends Component {
  renderSongs() {
    return this.props.data.songs.map(({id, title}) => {
      return (
        <li key={id} className="collection-item">
          <Link to={`songs/${id}`}>
            {title}
          </Link>
          <span onClick={() => this.onSongDelete(id)}><i className="material-icons">delete</i></span>
        </li>
      )
    })
  };

  showSongDetails = (id) => {

  };

  onSongDelete = (id) => {
    this.props.mutate({
      variables: { id }
    }).then(() => this.props.data.refetch());
  };

  render() {
    const {loading} =this.props.data;
    if(loading) { return (<div>...Loading</div>)}
    return (
      <div>
        <ul className="collection">
          { this.renderSongs() }
        </ul>
        <Link to="songs/new" className="btn-floating btn-large waves-effect waves-light red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    )
  }
}

export default graphql(mutation) (
  graphql(query)(SongsList)
)
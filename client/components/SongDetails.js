import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import {Link} from 'react-router';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
  renderLyrics = () => {
    const {song} = this.props.data;
    return song.lyrics.map(({id, content}) => (
      <li key={id} className="collection-item">{content}</li>
    ))
  }

  render() {
    const {song} = this.props.data;
    if(!song){return (<div></div> )}
    return (
     <div>
       <Link to='/'>Back</Link>
       <h5>{song.title}</h5>
       <ul className="collection">
         { this.renderLyrics() }
       </ul>
     </div>
    )
  }
}

export default graphql(fetchSong, {
  options: (props) => {return { variables: { id: props.params.id } } }
})(SongDetail);

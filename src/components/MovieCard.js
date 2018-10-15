import React, { Component } from 'react';
import { connect } from "react-redux";
import { Thumbnail, Col, Badge, Glyphicon } from 'react-bootstrap';
import { addToFavorites, removeFromFavorites } from '../actions';

class MovieCard extends Component {
  state = { heart: false }

  handleHeartClick = () => {
    this.state.heart
      ? this.props.removeFromFavorites(this.props.movie)
      : this.props.addToFavorites(this.props.movie)
    this.setState({ heart: !this.state.heart });
  }

  render() {
    const { movie={} } = this.props
    return (
      <React.Fragment>
        <Col xs={6} md={4}>
          <Thumbnail src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="242x200">
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <p>Release date - {movie.release_date}</p>
            <p><Badge><Glyphicon glyph="star" /> {movie.vote_average}</Badge></p>
            <Glyphicon glyph={this.state.heart ? 'heart' : 'heart-empty'} onClick={this.handleHeartClick} />
          </Thumbnail>
        </Col>
      </React.Fragment> 
    );
  }
}

export default connect(null,{ addToFavorites, removeFromFavorites })(MovieCard);

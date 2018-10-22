import React, { Component } from 'react';
import { connect } from "react-redux";
import { Thumbnail, Col, Badge, Glyphicon } from 'react-bootstrap';
import MovieDetails from './MovieDetails';
import { addToFavorites, removeFromFavorites } from '../actions';

class MovieCard extends Component {
  state = { 
    heart: this.props.favorites.find(m => m.id === this.props.movie.id),
    show: false,
  }

  handleHeartClick = () => {
    this.state.heart
      ? this.props.removeFromFavorites(this.props.movie)
      : this.props.addToFavorites(this.props.movie)
    this.setState({ heart: !this.state.heart });
  }

  limitString = (txt='', n=200) => txt.length > n ? `${txt.substring(0, n)}...` : txt

  toggleModal = () => this.setState({ show: !this.state.show });

  render() {
    const { movie={}, showHeart } = this.props
    return (
      <React.Fragment>
        <Col xs={6} md={4}>
            <Thumbnail src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt="242x200" style={{ height: '750px', cursor: 'pointer' }} onDoubleClick={this.toggleModal}>
              <h3>{movie.title}</h3>
              <p>{this.limitString(movie.overview, 180)}</p>
              <p>Release date - {movie.release_date || 'N/A'}</p>
              <p>
                <Badge><Glyphicon glyph="star" /> {movie.vote_average}</Badge>
                {showHeart && <Glyphicon glyph={this.state.heart ? 'heart' : 'heart-empty'}
                  style={{ top: '4px', left: '10px'}} onClick={this.handleHeartClick} />}
              </p>
            </Thumbnail>
        </Col>
        <MovieDetails movie={movie} show={this.state.show} closeModal={this.toggleModal} />
      </React.Fragment> 
    );
  }
}

const mapStateToProps = ({ favorites }) => {
  return {
    favorites,
  }
}

export default connect(mapStateToProps,{ addToFavorites, removeFromFavorites })(MovieCard);

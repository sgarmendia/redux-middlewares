import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';

import MovieCard from './MovieCard';
import Search from './Search';


class MovieResults extends Component {
  render() {
    
    return (
      <React.Fragment>
        <Row>
          <Link to='/favorites'>Favorites</Link>
        </Row>
        <br/>
        <Row>
          <Search />
        </Row>
        <br/>
        {this.props.movies.map(movie => <MovieCard key={movie.id} 
          movie={movie} showHeart={true} />)}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ movies, favorites }) => {
  return {
    movies,
    favorites
  }
}

export default connect(mapStateToProps)(MovieResults);
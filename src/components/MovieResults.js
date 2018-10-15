import React, { Component } from 'react';
import { connect } from "react-redux";
import MovieCard from './MovieCard';
import Search from './Search';

class MovieResults extends Component {
  render() {
    return (
      <React.Fragment>
        <Search />
        {this.props.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
  }
}

export default connect(mapStateToProps)(MovieResults);
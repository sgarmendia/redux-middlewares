import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import MovieCard from './MovieCard';


class Favorites extends Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Link to='/'>Home</Link>
        </Row>
        <br/>
        {this.props.favorites.map(movie => <MovieCard key={movie.id} movie={movie} heart={false} />)}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ favorites }) => {
  return {
    favorites,
  }
}

export default connect(mapStateToProps)(Favorites);
import React, { Component } from 'react';
import tmdbAPI from '../helpers/tmdbAPI';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { moviesToStore } from "../actions";


class Search extends Component {
  state = { query: '' }

  search = () => {
    this.state.query ? this.getMovieByName(this.state.query) : this.getTrendingMovies()
    this.setState({ query: '' })
  }

  getMovieByName = async name => {
    try {
      const movies = await tmdbAPI.fetchMovieByName(name)
      this.props.moviesToStore(movies)
    } catch (error) {
      console.error(error)
    }
  }

  getTrendingMovies = async () => {
    try {
      const movies = await tmdbAPI.fetchTrendingMovies()
      this.props.moviesToStore(movies)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <React.Fragment>
        <Form inline className='col-md-5 col-md-offset-4'>
          <FormGroup>
            <ControlLabel></ControlLabel>
            <FormControl 
              type='text'
              placeholder='search'
              value={this.state.query}
              onChange={e => this.setState({ query: e.target.value })}
              onSubmit={this.search}
            />{' '}
            <Button onClick={this.search}>Submit</Button>
          </FormGroup>
        </Form>
      </React.Fragment>
    );
  }
}

export default connect(null,{ moviesToStore })(Search);
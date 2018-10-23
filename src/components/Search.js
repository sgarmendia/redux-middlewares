import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from "../actions";

class Search extends Component {
  componentDidMount() {
    ReactDOM.findDOMNode(this.movieSearch).focus()
    this.props.dispatch(actions.asyncGetTrendingMovies())
  }
  
  state = { query: '' }

  search = () => {
    if(!this.state.query) return
    this.props.dispatch(actions.asyncGetMoviesByName(this.state.query))
    this.setState({ query: '' })
  }

  handle = e => (e.key === 'Enter' || e.keyCode === 13) && this.search(e.target.value)

  render() {
    return (
      <React.Fragment>
        <Form inline className='' 
              onSubmit={e => e.preventDefault()}>
          <FormGroup>
            <ControlLabel></ControlLabel>
            <FormControl
              ref={input => this.movieSearch = input }
              type='text'
              placeholder='search'
              value={this.state.query}
              onChange={e => this.setState({ query: e.target.value })}
              onKeyUp={this.handle}
            />{' '}
          </FormGroup>
        </Form>
      </React.Fragment>
    );
  }
}

export default connect()(Search);
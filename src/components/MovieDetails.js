import React from 'react';
import { Modal, Image } from 'react-bootstrap';

const MovieDetails = (props) => {
  return (
    <React.Fragment>
      <Modal show={props.show} onHide={props.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{props.movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={`https://image.tmdb.org/t/p/w500${props.movie.backdrop_path || props.movie.poster_path}`}
          responsive style={{ width: '100%'}} />
          <br/>
          <p>{props.movie.overview}</p>
          <p>Release date - {props.movie.release_date || 'N/A'}</p>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default MovieDetails;

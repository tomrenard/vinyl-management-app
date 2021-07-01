import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

export default function VinyForm(props) {
  const [vinyl, setVinyl] = useState({
    title: props.vinyl ? props.vinyl.title : '',
    artist: props.vinyl ? props.vinyl.artist : '',
    genre: props.vinyl ? props.vinyl.genre : '',
    price: props.vinyl ? props.vinyl.price : '',
    released: props.vinyl ? props.vinyl.released : '',
    label: props.vinyl ? props.vinyl.label : '',
    format: props.vinyl ? props.vinyl.format : '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { title, artist, genre, price, released, label, format } = vinyl;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [title, artist, genre, price, released, label, format];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const vinyl = {
        id: uuidv4(),
        title,
        artist,
        genre,
        price,
        released,
        label,
        format,
        date: new Date()
      };
      props.handleOnSubmit(vinyl);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    setVinyl((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Vinyl Title</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="title"
            value={title}
            placeholder="Enter title of vinyl"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="artist">
          <Form.Label>Vinyl Artist</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="artist"
            value={artist}
            placeholder="Enter artist of vinyl"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="genre">
          <Form.Label>Genre</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="genre"
            value={genre}
            placeholder="Enter genre"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Vinyl Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter price of vinyl"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Vinyl Release Date</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="released"
            value={released}
            placeholder="Enter Release Date"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Vinyl Label</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="label"
            value={label}
            placeholder="Enter label of vinyl"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Vinyl Format</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="format"
            value={format}
            placeholder="Enter format of vinyl"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );

}

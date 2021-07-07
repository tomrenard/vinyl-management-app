import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';


export default function VinyForm(props) {
  const [vinyl, setVinyl] = useState({
    title: props.vinyl ? props.vinyl.bookname : '',
    artist: props.vinyl ? props.vinyl.author : '',
    year: props.vinyl ? props.vinyl.year : '',
    genre: props.vinyl ? props.vinyl.genre : '',
    label: props.vinyl ? props.vinyl.label : '',
    cover: props.vinyl ? props.vinyl.cover : '',
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { title, artist, year, genre, label, cover } = vinyl;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [title, artist, year, genre, label, cover];
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
        year,
        genre,
        label,
        cover,
        date: new Date()
      };
      props.handleOnSubmit(vinyl);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVinyl((prevState) => ({
      ...prevState,
      [name]: value
      }));
  };
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
         <Form.Group controlId="date">
          <Form.Label>Vinyl Release Date</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="year"
            value={year}
            placeholder="Enter Release Year"
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
        <Form.Group controlId="label">
          <Form.Label>Genre</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="label"
            value={label}
            placeholder="Enter label"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="cover">
          <Form.Label>Cover</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="cover"
            value={cover}
            placeholder="Upload Cover Link (find on Discogs)"
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

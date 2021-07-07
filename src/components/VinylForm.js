import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';


export default function VinyForm(props) {
  const [vinyls, setVinyls] = useLocalStorage('vinyls', []);
  console.log(vinyls);
  return (
    <div className="main-form">
      <Form>
        <Form.Group controlId="title">
          <Form.Label>Vinyl Title</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="title"
            value=''
            placeholder="Enter title of vinyl"
          />
        </Form.Group>
        <Form.Group controlId="artist">
          <Form.Label>Vinyl Artist</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="artist"
            value=''
            placeholder="Enter artist of vinyl"
          />
        </Form.Group>
         <Form.Group controlId="date">
          <Form.Label>Vinyl Release Date</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="year"
            value=''
            placeholder="Enter Release Year"
          />
        </Form.Group>
        <Form.Group controlId="genre">
          <Form.Label>Genre</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="genre"
            value=''
            placeholder="Enter genre"
          />
        </Form.Group>
        <Form.Group controlId="label">
          <Form.Label>Genre</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="label"
            value=''
            placeholder="Enter label"
          />
        </Form.Group>
        <Form.Group controlId="genre">
          <Form.Label>Cover</Form.Label>
          <Form.Control
            className="input-control"
            type="file"
            name="cover"
            value=''
            placeholder="Add Cover"
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );

}

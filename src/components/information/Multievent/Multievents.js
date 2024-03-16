import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Multievents.css";

const MultiEvents = ({ name, setResumeDetails }) => {
  const [value, setValue] = useState({ name: "", certificate: null });
  const [events, setEvents] = useState([]);

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onAdd = (e) => {
    e.preventDefault();
    const data = { ...value, id: Date.now() };
    setResumeDetails((prev) => ({ ...prev, [name]: [...events, data] }));
    setEvents([...events, data]);
    setValue({ name: "", certificate: null });
  };

  const onRemove = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setResumeDetails((prev) => ({ ...prev, [name]: updatedEvents }));
    setEvents(updatedEvents);
  };

  const handleCertificateUpload = (e) => {
    setValue({ ...value, certificate: e.target.files[0] });
  };

  return (
    <div>
      <div className="multi-input-wrapper">
        <Form.Control
          type="text"
          placeholder="Enter event Name"
          name="name"
          value={value.name}
          onChange={onChange}
        />
        <Form.Control
          type="file"
          accept=".pdf"
          onChange={handleCertificateUpload}
        />
        <Button className="add-btn1" onClick={onAdd}>
          Add+
        </Button>
      </div>
      <div>
        {events.map((event) => (
          <div key={event.id}>
            <h6 className="list-value">Event Name: {event.name}</h6>
            {event.certificate && (
              <a href={URL.createObjectURL(event.certificate)} download>
                Download Certificate
              </a>
            )}
            <Button variant="outline-danger" onClick={() => onRemove(event.id)}>
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiEvents;

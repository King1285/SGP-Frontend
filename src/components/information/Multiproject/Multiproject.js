import React, { useState } from "react";
import "./Multiproject.css";

const defaultValue = {
  project_name: "",
  description: "",
};

const MultiProjects = ({ name, setResumeDetails }) => {
  const [value, setValue] = useState(defaultValue);
  const [lists, setLists] = useState([]);

  const onChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onAdd = (e) => {
    e.preventDefault();
    const data = {
      id: Math.floor(100000000 + Math.random() * 900000000),
      ...value,
    };
    setResumeDetails((prev) => ({ ...prev, [name]: [...lists, value] }));

    setLists([...lists, data]);
    setValue(defaultValue);
  };

  const onRemove = (e, id) => {
    e.preventDefault();
    const data = lists.filter((x) => x.id !== id);
    setResumeDetails((prev) => ({ ...prev, [name]: data }));

    setLists(data);
  };

  return (
    <div className="">
      <div className="multi-input-wrapper">
        <input
          type="text"
          placeholder="Enter Project Name"
          name="project_name"
          onChange={onChange}
          value={value.project_name}
          className="input-tag"
        />
        <textarea
          placeholder="Enter Description"
          name="description"
          onChange={onChange}
          value={value.description}
          className="input-tag"
        />
        <button className="add-btn" onClick={onAdd}>
          Add project
        </button>
      </div>
      <div>
        {lists.map((list) => (
          <div key={list.id}>
            <h6 className="list-value">
              Project Name: <span>{list.project_name}</span>
            </h6>
            <h6 className="list-value">
              Description: <span>{list.description}</span>
            </h6>
            <button
              className="remove-btn"
              onClick={(e) => onRemove(e, list.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiProjects;

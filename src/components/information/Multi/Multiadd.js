import React, { useState } from "react";
import "./Multiadd.css";

const MultiAdd = ({ label, setResumeDetails, name, placeholder }) => {
  const [value, setValue] = useState("");
  const [lists, setLists] = useState([]);

  const onAdd = (e) => {
    e.preventDefault();
    if (!lists.includes(value) && value.length) {
      setResumeDetails((prev) => ({ ...prev, [name]: [...lists, value] }));
      setLists([...lists, value]);
      setValue("");
    }
  };

  const onRemove = (e, list) => {
    e.preventDefault();
    const data = lists.filter((x) => x !== list);
    setResumeDetails((prev) => ({ ...prev, [name]: data }));
    setLists(data);
  };

  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={`Enter your ${placeholder}`} 
        className="input-tag"
      />
      <button className="add-btn" onClick={onAdd}>
        Add+
      </button>
      {lists.length > 0 && (
        <ul className="list-container">
          {lists.map((list) => (
            <div className="list-wrapper" key={list}>
              <li className="list-name">{list}</li>
              <button className="remove-btn" onClick={(e) => onRemove(e, list)}>
                Remove
              </button>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiAdd;

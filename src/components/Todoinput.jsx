import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_todo } from "../redux/actions/todoActions";

const Todoinput = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!item) return alert("Please enter a item");
    dispatch(add_todo(item));
    setItem("");
  };

  console.log(item);
  return (
    <div>
      <h2 className="display-5 text-center text-danger mt-4 p-3">
        ToDo with Redux
      </h2>
      <div className="input-group w-50 mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a todo"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-danger"
            type="button"
            id="button-addon2"
            onClick={handleClick}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todoinput;

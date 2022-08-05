import React from "react";

const Todoinput = () => {
  return (
    <div>
      <h2 className="display-5 text-center text-danger mt-4 p-3">
        ToDo with Redux
      </h2>
      <div className="input-group w-50 mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Enter a todo"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-danger"
            type="button"
            id="button-addon2"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todoinput;

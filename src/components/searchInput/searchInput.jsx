import React from "react";
import "./searchInput.css";

export default (props) => {
    return (
      <div>
        <input
          placeholder={"Search for a film"}
          className={"search-input__input"}
          onChange={props.onChange}
        />
        <button>Search</button>
      </div>
    );
}

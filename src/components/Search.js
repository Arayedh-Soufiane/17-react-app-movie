import React, { useState } from "react";
import "./Search.css";

export default function Search(props) {
  console.log({ props });

  function hendleSearch(tem) {
    const search = props.x.filter(
      (el) =>
        el.name.toLowerCase().indexOf(tem.target.value.toLowerCase()) >= 0 &&
        parseFloat(el.rating) == parseFloat(props.rt)
    );
    setssearching(search);
  }
  const [ssearching, setssearching] = useState(props.x);

  return (
    <div>
      <div className="modalInputSearch">
        <label className="cllabel"></label>
        <input
          type="text"
          name="year"
          className="clinputSearch"
          onChange={(el) => {
            props.search(ssearching);
            hendleSearch(el);
          }}
        ></input>
        <button
          onClick={(el) => {
            props.search(ssearching);
            hendleSearch(el);
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

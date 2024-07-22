import React from "react";

export default function DataPiece(props) {
  return (
    <div className="col-md-7 text-start mx-5 my-3">
      <span>
        <h4 className="col-md-10  mx-3">
        {props.title} :&nbsp;{" "}
          <span className="text-success fw-bold"> {props.info}</span>
        </h4>
      </span>
    </div>
  );
}

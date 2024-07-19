import React from "react";
import Navigation from "../components/Navigation";
import Chatbot from "../components/Chatbot";

export default function Assistant() {
  return (
    <main className="vh-100">
      <Navigation />
      <div className="container bg-body-tertiary mt-5">
        <div className="d-flex justify-content-center">
          <div className="col-md-7">sjsjsj</div>
          <Chatbot />
        </div>
      </div>
    </main>
  );
}

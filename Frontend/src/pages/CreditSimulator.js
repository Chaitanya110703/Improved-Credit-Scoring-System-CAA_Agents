import React from "react";
import Navigation from "../components/Navigation";
import Simulate from "../components/Simulate";

export default function CreditSimulator() {
  return (
    <main className="vh-100">
      <Navigation />
      <div className="container bg-body-tertiary mt-3">
        <h1 className="fw-bolder text-center p-3">
          Know Your <span className="text-info">Credit Scores</span>
        </h1>
        <hr />
        <Simulate />
      </div>
    </main>
  );
}

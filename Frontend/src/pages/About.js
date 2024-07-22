import React from "react";
import Navigation from "../components/Navigation";

export default function About() {
  return (
    <main className="vh-100">
      <Navigation />
      <div className="container bg-body-tertiary mt-5">
        <h1 className="fw-bolder text-center">
         <span className="text-info">About Us</span><hr/>
        </h1>
        <div className="col-md-12 d-flex justify-content-center">
            <div className="col-md-8 ">
                <p> We developed this Web Application for credit Score prediction and simulator.
                <br />
                <br/>
                Our credit scoring and loan prediction system uses technologies like AI and machine learning for monitoring and calculating credit scores. It can gives you loan predictions and suggestions for credit management plans to boost your credit score.  Our system provide features like credit score monitoring, alerts, predict loan offers and debt management plans to help you improve your credit score. By analyzing the relationship between credit scores and NPAs (Non-Performing Assets), we highlight the significance of keeping a strong credit history.
                </p>
            </div>
        </div>
      </div>
    </main>
  );
}

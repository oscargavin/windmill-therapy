import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Helmet>
      <title>Windmill Hypnotherapy | Professional Hypnotherapy Services</title>
      <link rel="icon" type="image/png" href="/logo.png" />
      <meta
        name="description"
        content="Windmill Hypnotherapy provides professional hypnotherapy services to help you overcome challenges, improve well-being, and achieve your goals. Book a session today!"
      />
      <meta
        name="keywords"
        content="hypnotherapy, hypnosis, well-being, personal development, mental health"
      />
      <meta name="author" content="Windmill Hypnotherapy" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://www.windmillhypnotherapy.com/" />
      <meta
        property="og:title"
        content="Windmill Hypnotherapy | Professional Hypnotherapy Services"
      />
      <meta
        property="og:description"
        content="Windmill Hypnotherapy provides professional hypnotherapy services to help you overcome challenges, improve well-being, and achieve your goals. Book a session today!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.windmillhypnotherapy.com/" />
      <meta
        property="og:image"
        content="https://www.windmillhypnotherapy.com/logo.png"
      />
      <meta name="twitter:card" content="summary" />
      <meta
        name="twitter:title"
        content="Windmill Hypnotherapy | Professional Hypnotherapy Services"
      />
      <meta
        name="twitter:description"
        content="Windmill Hypnotherapy provides professional hypnotherapy services to help you overcome challenges, improve well-being, and achieve your goals. Book a session today!"
      />
      <meta
        name="twitter:image"
        content="https://www.windmillhypnotherapy.com/logo.png"
      />
    </Helmet>
    <App />
  </React.StrictMode>
);

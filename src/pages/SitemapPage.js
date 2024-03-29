import React from "react";

const SitemapPage = () => {
  return (
    <div>
      <h1>Sitemap</h1>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
      </ul>
      <p>
        You can also access the sitemap XML file <a href="/sitemap.xml">here</a>
        .
      </p>
    </div>
  );
};

export default SitemapPage;

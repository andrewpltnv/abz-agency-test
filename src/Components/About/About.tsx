import React from 'react';
import './_About.scss';

export default function About() {
  return (
    <div className="About">
      {
        //@ts-ignore
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a name="about" className="anchor">about</a>
      }
      <div className="about-info">
        <div className="about-picture"/>
        <span>
          <h2>I am cool frontend developer</h2>
        </span>
      </div>
    </div>
  );
}

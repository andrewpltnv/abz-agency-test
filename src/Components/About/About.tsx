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
      <h1>Let's get acquainted</h1>
      <div className="info">
        <div className="frame">
          <span className="picture"/>
        </div>
        <span className="text">
          <h2>I am cool frontend developer</h2>
          <p>We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any
            CSS and Javascript 3rd party libraries without any restriction.</p>
          <p>If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get
            bonus points. If you use task runner(gulp/webpack) you will get bonus points as well.
            Slice service directory page PSD mochup into HTML5/CSS3.</p>
          <a href="#Singing">Sing up now</a>
        </span>
      </div>
    </div>
  );
}

import React from 'react';
import './_Banner.scss';

export default function Banner() {
  const text = ["We kindly remind you that your test assignment should be submitted as a link to\n" +
    "        github/bitbucket repository."," Please be patient, we consider and respond to every\n" +
    "        application that meets minimum requirements. We look forward to your submission.\n" +
    "        Good luck! The photo has to scale in the banner area on the different screens."];

  return (
    <div className="Banner">
      <span>
        <h1>TEST ASSIGNMENT FOR FRONTEND DEVELOPER POSITION</h1>
        <p>{(window.innerWidth>360)?text[0]+text[1]:text[0]}</p>
        <button>Sing up now</button>
      </span>
    </div>
  );
}

// import React, { useState } from "react";

export default function About(props) {
//   const [mystyle, setmystyle] = useState({
//     color: "#000000de",
//     backgroundColor: "white",
//   });

    let mystyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#05597e' : 'white',

    } 
  return (
    <div className="container my-3" style={mystyle}>
      <h1>About Us</h1>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={mystyle}
            >
             <b> JavaScript </b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample" style={mystyle}
          >
            <div className="accordion-body" style={mystyle}>
              JavaScript often abbreviated as JS, is a programming language that
              conforms to the ECMAScript specification.[10] JavaScript is
              high-level, often just-in-time compiled and multi-paradigm. It has
              curly-bracket syntax, dynamic typing, prototype-based
              object-orientation and first-class functions. Alongside HTML and
              CSS, JavaScript is one of the core technologies of the World Wide
              Web.[11] Over 97% of websites use it client-side for web page
              behavior,[12] often incorporating third-party libraries.[13] Most
              web browsers have a dedicated JavaScript engine to execute the
              code on the user's device. As a multi-paradigm language,
              JavaScript supports event-driven, functional, and imperative
              programming styles. It has application programming interfaces
              (APIs) for working with text, dates, regular expressions, standard
              data structures, and the Document Object Model (DOM).
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={mystyle}
            >
            <strong>  ReactJs  </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              React makes it painless to create interactive UIs. Design simple
              views for each state in your application, and React will
              efficiently update and render just the right components when your
              data changes. Declarative views make your code more predictable
              and easier to debug.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={mystyle}
            >
            <b>  Bootstrap </b>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body my-1" style={mystyle}>
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript
              plugins.Bootstrap employs a handful of important global styles and
              settings that you’ll need to be aware of when using it, all of
              which are almost exclusively geared towards the normalization of
              cross browser styles. Let’s dive in.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Home() {
  return (
    <section>
      <h1>Home page</h1>
      <button onClick={handleButtonClick} className="button">
        Click here
      </button>
    </section>
  );
}

function handleButtonClick() {
  alert("You clicked the button!");
}

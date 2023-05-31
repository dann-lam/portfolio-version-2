import React from "react";

export default function Contact(props) {
  const handleEvent = (e) => {
    if (e.target.name === "name") {
      if (!e.target.value) {
        alert("Yenter a name.");
      }
    } else if (e.target.name === "email") {
      if (e.target.value === "") {
        alert("enter an email.");
      } else if (
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          String(e.target.value).toLowerCase()
        )
      ) {
        alert("enter a valid email adress.");
      }
    } else if (e.target.name === "message") {
      if (!e.target.value) {
        alert("enter a message.");
      }
    }
  };

  return (
    <div>
      <form>
        <div>
          <h1>Contact me!</h1>
          <label htmlFor="name-input" id="text_big">
            Name
          </label>
          <input
            id="name-input"
            name="name"
            onBlur={handleEvent}
            type="text"
            // value={name}
          />
        </div>
        <div>
          <label htmlFor="email-input">Email</label>
          <input
            id="email-input"
            name="email"
            onBlur={handleEvent}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="message-input">Message</label>
          <textarea
            id="message-input"
            name="message"
            onBlur={handleEvent}
            type="text"
          ></textarea>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

// FeedBack
"use client";

import { useState } from "react";

export default function Feedback() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Full name: ", fullname);
    console.log("Email: ", email);
    console.log("Message: ", message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFullname("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <>
      <div className="bg-slate-500 rounded-lg">
        <form
          onSubmit={handleSubmit}
          className="md:py-2 mt-0 border-t md:flex md:flex-col flex-1 flex-row gap-6 px-4"
        >
          <div className=" px-5 flex justify-between">
            <label htmlFor="fullname">Full Name: </label>
            <input
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              type="text"
              id="fullname"
              placeholder="John Doe"
              className="rounded-sm p-2 border"
            />
          </div>

          <div className="md:py-1 py-5 px-5 flex justify-between">
            <label htmlFor="email">Email: </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="text"
              id="email"
              placeholder="john@gmail.com"
              className="rounded-sm p-2 border"
            />
          </div>

          <div className=" px-5 flex justify-between">
            <label htmlFor="message">Your Message: </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              className="h-32 rounded-sm p-2 border"
              id="message"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            className="bg-green-700 p-3 text-white font-bold hover:bg-green-800"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

import React from "react";
import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  
const PUBLIC_KEY = "sLnuXolpeVKjGDKdv";
const SERVICE_ID = "service_4mdf5nv";
const TEMPLATE_ID = "template_y2itwqa";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        alert("Message Sent!");
        setFormData({name:"",
            email: "",
            message: ""
        });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };
  return (
    <section
      id="contact"
      className="min-h-screen flex justify-center items.center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to to-cyan-400 bg-clip-text text-transparent text-center">
            Get in Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                value={formData.name}
                name="name"
                required
                className="w-full px-3 py-4 border border-white/10 bg-white/5 text-white rounded transition focus:outline-none focus:border-blue-500/80 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e)=> setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={formData.email}
                name="email"
                required
                className="w-full px-3 py-4 border border-white/10 bg-white/5 text-white rounded transition focus:outline-none focus:border-blue-500/80 focus:bg-blue-500/10"
                placeholder="example@gmail.com"
                onChange={(e)=> setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                value={formData.message}
                name="message"
                required
                rows={5}
                className="w-full px-3 py-4 border border-white/10 bg-white/5 text-white rounded transition focus:outline-none focus:border-blue-500/80 focus:bg-blue-500/10"
                placeholder="Your Message here..."
                onChange={(e)=> setFormData({...formData, message: e.target.value})}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-medium rounded px-6 py-3 transition relative cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] "
            >
              Submit Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;

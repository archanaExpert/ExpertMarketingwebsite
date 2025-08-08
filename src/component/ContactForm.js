"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!\n" + JSON.stringify(formData, null, 2));

  
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-lg bg-white rounded-xl p-6 space-y-4"
    >
      <div>
        <label className="block font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full shadow-md p-6 rounded-xl hover:shadow-lg px-3 py-2"
          required
        />
      </div>
      <div>
        <label className="block   font-medium">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full shadow-md p-6 rounded-xl hover:shadow-lg px-3 py-2 "
          required
        />
      </div>
      <div>
        <label className="block   font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full shadow-md p-6 rounded-xl hover:shadow-lg   px-3 py-2 "
          required
        />
      </div>
      <div>
        <label className="block   font-medium">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full shadow-md p-6 rounded-xl hover:shadow-lg  px-3 py-2  h-28"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 w-full text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Submit{" "}
      </button>
    </form>
  );
}
